import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
export default function Chat({ messages }) {
  const { themeColor } = useContext(ThemeContext);
  const messageEndRef = useRef(null);
  const WELCOME_MESSAGE = {
    role: "assistant",
    content: "嗨！請問我可以如何幫助您呢？",
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="d-flex flex-column gap-3 h-100 p-3 overflow-auto">
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div
          className={`w-75 py-2 px-4 rounded-4 ${
            role == "user" ? "align-self-end" : "align-self-start"
          }`}
          style={{
            backgroundColor:
              role == "user"
                ? themeColor == "light"
                  ? "#ffda6a"
                  : "var(--bs-primary-border-subtle)"
                : themeColor == "light"
                ? "var(--bs-secondary-bg-subtle)"
                : "var(--bs-success-border-subtle)",
          }}
          key={index}
          data-role={role}
        >
          <Markdown>{content}</Markdown>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}
