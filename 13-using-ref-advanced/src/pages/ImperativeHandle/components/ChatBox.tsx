import {
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type RefObject,
} from "react";
import type { Chat } from "..";
import S from "../style.module.css";

export interface ChatBoxHandle {
  scrollDownList: () => void;
}

type Props = {
  message: Chat;
  onAddMessage: (message: string) => void;
  ref: RefObject<ChatBoxHandle | null>;
};

function ChatBox({ message, onAddMessage, ref }: Props) {
  const id = useId();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const olRef = useRef<HTMLOListElement | null>(null);
  const [isComposing, setIsComposing] = useState(false);
  useImperativeHandle(ref, () => ({
    scrollDownList: () => {
      const ol = olRef.current;
      if (!ol) return;
      setTimeout(() => ol?.scrollTo(0, ol.scrollHeight));
    },
  }));

  const sendMessage = (newMessage: string) => {
    const textarea = textareaRef.current;
    // const ol = olRef.current!;
    if (!textarea) return;
    if (newMessage.length <= 0) {
      alert("메시지 내용을 입력하세요");
      textarea.select();
      return;
    }
    onAddMessage(newMessage);
    textarea.value = "";
    // setTimeout(() => ol?.scrollTo(0, ol.scrollHeight));
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const textarea = textareaRef.current!;
    // sendMessage(textarea.value);
    const formData = new FormData(e.currentTarget);
    let newMessage = formData.get("message");
    if (typeof newMessage !== "string") return;
    newMessage = newMessage.trim();
    sendMessage(newMessage);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key, shiftKey } = e;
    if (key === "Enter" && !shiftKey && !isComposing) {
      e.preventDefault();

      const newMessage = e.currentTarget.value.trim();
      if (newMessage.length > 0) {
        sendMessage(newMessage);
      }
    }
  };

  return (
    <section className={S.chatBox}>
      <h2 className="a11y-hidden">채팅 화면</h2>
      <ol ref={olRef} className={S.chats}>
        {message.map(({ id, isMe, message }) => {
          const classNames = `${S.chat} ${isMe ? S.me : ""}`.trim();
          return (
            <li key={id} className={classNames}>
              {message}
            </li>
          );
        })}
      </ol>
      <form className={S.form} onSubmit={handleSendMessage}>
        <div className={S.messageBox}>
          <label htmlFor={id} className="a11y-hidden">
            메시지 입력
          </label>
          <textarea
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            ref={textareaRef}
            name="message"
            id={id}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <button type="submit">보내기</button>
      </form>
    </section>
  );
}
export default ChatBox;
