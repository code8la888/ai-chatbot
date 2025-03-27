import { useEffect, useRef } from "react";
import styles from "./Chat.module.css";
import Markdown from "react-markdown";
export default function Chat({ messages }) {
  const messageEndRef = useRef(null);
  const WELCOME_MESSAGE = {
    role: "assistant",
    content: "嗨!請問我可以如何幫助您呢?",
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div className={styles.Message} key={index} data-role={role}>
          <Markdown>{content}</Markdown>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}
