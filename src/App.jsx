import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import Loader from "./Components/Loader/Loader";
import ChatContainer from "./Components/Chat/ChatContainer";
import Header from "./Components/Header";
import Controls from "./Components/Controls/Controls";
import { ThemeContext } from "./ThemeContext";

const googleai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY,
});
const chat = googleai.chats.create({ model: "gemini-2.0-flash", history: [] });

function App() {
  const [themeColor, setThemeColor] = useState("light");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleThemeColor = () => {
    setThemeColor((preThemeColor) =>
      preThemeColor === "light" ? "dark" : "light"
    );
  };

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await chat.sendMessage({ message: content });
      addMessage({ content: result.text, role: "assistant" });
    } catch (error) {
      addMessage({
        content: "抱歉，我無法處理您的請求，請重新操作一次!",
        role: "system",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ThemeContext.Provider
      value={{ themeColor, setThemeColor, toggleThemeColor }}
    >
      <div
        className="d-flex flex-column align-items-center gap-3 vh-100 p-3"
        style={{
          backgroundColor:
            themeColor === "light"
              ? "#FFEE99"
              : "var(--bs-secondary-text-emphasis)",
        }}
      >
        {isLoading && <Loader />}
        <Header />
        <ChatContainer messages={messages} />
        <Controls onSend={handleContentSend} isDisabled={isLoading} />
      </div>
      <div className="position-absolute top-0 end-0">
        <button
          onClick={toggleThemeColor}
          className="shadow-sm"
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor:
              themeColor === "light"
                ? "var(--bs-yellow)"
                : "var(--bs-link-hover-color)",
            border: "none",
            borderRadius: "8px",
          }}
        >
          {themeColor === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
