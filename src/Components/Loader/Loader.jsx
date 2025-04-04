import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
export default function div() {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div
      className="d-flex justify-content-center align-items-center  w-100 h-100 position-fixed top-0 start-0 opacity-50"
      style={{ backgroundColor: themeColor == "light" ? "whitesmoke" : "gray" }}
    >
      <div className="Loader"></div>
    </div>
  );
}
