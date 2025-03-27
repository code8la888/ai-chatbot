import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import styles from "./App.module.css";
import Loader from "./Components/Loader/Loader";
import ChatContainer from "./Components/Chat/ChatContainer";
import Header from "./Components/Header";
import Controls from "./Components/Controls/Controls";

const googleai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY,
});
const chat = googleai.chats.create({ model: "gemini-2.0-flash", history: [] });

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className={styles.App}>
      {isLoading && <Loader />}
      <Header />
      <ChatContainer messages={messages} />
      <Controls onSend={handleContentSend} isDisabled={isLoading} />
    </div>
  );
}

export default App;
