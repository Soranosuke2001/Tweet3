import { FC } from "react";
import Button from "./Button";

interface NewTweetFormProps {}

const NewTweetForm: FC<NewTweetFormProps> = ({}) => {
  return (
    <form action="" className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        {/* <ProfileImage src="" /> */}
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
