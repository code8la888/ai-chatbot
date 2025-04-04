import Chat from "./Chat";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function ChatContainer({ messages }) {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div
      className="flex-grow-1 w-100 rounded-4 overflow-auto"
      style={{
        maxWidth: "640px",
        backgroundColor:
          themeColor == "light" ? "white" : "var(--bs-secondary)",
      }}
    >
      <Chat messages={messages} />
    </div>
  );
}
