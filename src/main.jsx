import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

function Root() {
  useEffect(() => {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
      // Fade out effect
      overlay.style.transition = "opacity 0.5s ease";
      overlay.style.opacity = "0";

      // Remove the overlay after the fade out
      setTimeout(() => {
        overlay.remove();
      }, 500);
    }
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
