import { FC, useCallback, useRef, useState } from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useSession } from "next-auth/react";

interface NewTweetFormProps {}

function updateTextAreaHeight(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;

  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

const NewTweetForm: FC<NewTweetFormProps> = ({}) => {
  const session = useSession();
  if (session.status !== "authenticated") return null;

  return <Form />;
};

function Form() {
  const session = useSession();
  if (session.status !== "authenticated") return null;

  const [inputValue, setInputValue] = useState("");

  const textAreaRef = useRef<HTMLTextAreaElement>();
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaHeight(textArea);
    textAreaRef.current = textArea;
  }, []);

  return (
    <form action="" className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <textarea
          ref={inputRef}
          style={{ height: 0 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          placeholder="What's Happening?"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}

export default NewTweetForm;
