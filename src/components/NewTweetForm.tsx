"use client";

import { FC } from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useSession } from "next-auth/react";

interface NewTweetFormProps {}

const NewTweetForm: FC<NewTweetFormProps> = ({}) => {
  const session = useSession();

  if (session.status !== "authenticated") return null;

  return (
    <form action="" className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <textarea
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          placeholder="What's Happening?"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
};

export default NewTweetForm;
