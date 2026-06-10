import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function ContentArea() {
  const { theme } = useContext(ThemeContext);

  const contentClass =
    theme === "dark" ? "content-area dark" : "content-area light";

  return (
    <section className={contentClass}>
      <h2>Content Area</h2>
      <p>This area responds to the current theme. The theme is: {theme}</p>
    </section>
  );
}

export default ContentArea;
