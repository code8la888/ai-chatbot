import styles from "./ChatContainer.module.css";
import Chat from "./Chat";

export default function ChatContainer({ messages }) {
  return (
    <div className={styles.ChatContainer}>
      <Chat messages={messages} />
    </div>
  );
}
