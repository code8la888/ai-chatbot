import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
export default function Header() {
  const { themeColor } = useContext(ThemeContext);
  return (
    <header className="text-center">
      <img
        src="/chatbot.png"
        alt="chatbot-image"
        style={{ width: "80px", height: "80px" }}
      />
      <h3
        className="m-0"
        style={{ color: themeColor === "light" ? "black" : "white" }}
      >
        聊天機器人
      </h3>
    </header>
  );
}
