import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
export default function Controls({ onSend, isDisabled = false }) {
  const { themeColor } = useContext(ThemeContext);
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
    <div
      className="d-flex align-items-center gap-2 w-100"
      style={{ maxWidth: "640px" }}
    >
      <div
        className="d-flex flex-grow-1 py-2 px-3 rounded-pill align-items-center shadow-lg"
        style={{
          backgroundColor:
            themeColor == "light" ? "var(--bs-light)" : "var(--bs-gray-400)",
        }}
      >
        <TextareaAutosize
          ref={textareaRef}
          className="w-100 h-100 border-0 overflow-auto"
          style={{
            outline: "none",
            resize: "none",
            backgroundColor:
              themeColor == "light" ? "var(--bs-light)" : "var(--bs-gray-400)",
          }}
          placeholder="請輸入訊息..."
          minRows={1}
          maxRows={1}
          disabled={isDisabled}
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
        ></TextareaAutosize>
      </div>
      <button
        className="h-100 border-0 rounded-pill shadow-sm fw-semibold"
        style={{
          width: "60px",
          height: "50px",
          outline: "none",
          backgroundColor:
            themeColor == "light"
              ? "var(--bs-yellow)"
              : "var(--bs-link-hover-color)",
          color: themeColor == "light" ? "black" : "white",
        }}
        onClick={handleContentSend}
        disabled={isDisabled}
      >
        傳送
      </button>
    </div>
  );
}
