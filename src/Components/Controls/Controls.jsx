import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./Controls.module.css";

export default function Controls({ onSend, isDisabled = false }) {
  const textareaRef = useRef(null);
  const [content, setContent] = useState("");
  useEffect(() => {
    if (!isDisabled) {
      textareaRef.current.focus();
    }
  }, [isDisabled]);

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleContentSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleContentSend();
    }
  }
  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <TextareaAutosize
          ref={textareaRef}
          className={styles.TextArea}
          placeholder="請輸入訊息..."
          minRows={1}
          disabled={isDisabled}
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
        ></TextareaAutosize>
      </div>
      <button
        className={styles.Button}
        onClick={handleContentSend}
        disabled={isDisabled}
      >
        傳送
      </button>
    </div>
  );
}
