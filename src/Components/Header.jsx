import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.Header}>
      <img className={styles.Logo} src="/chatbot.png" alt="chatbot-image" />
      <h2 className={styles.Title}>聊天機器人</h2>
    </header>
  );
}
