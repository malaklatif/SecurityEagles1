import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 650, delay = 0, className = "" }) => {
  const texts = Array.isArray(text) ? text : [text];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    let timeout;
    let resetTimeout;
    let nextTimeout;
    const currentText = texts[currentIdx];

    const startTyping = () => {
      interval = setInterval(() => {
        setDisplayed(currentText.slice(0, i + 1));
        i++;
        if (i === currentText.length) {
          clearInterval(interval);
          // After finished, wait, then go to next sentence
          resetTimeout = setTimeout(() => {
            setDisplayed("");
            i = 0;
            nextTimeout = setTimeout(() => {
              setCurrentIdx((prev) => (prev + 1) % texts.length);
            }, 400); // Short pause before next sentence starts typing
          }, 1200); // Cursor blinks for 1.2s before switching
        }
      }, speed);
    };
    timeout = setTimeout(startTyping, delay);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(resetTimeout);
      clearTimeout(nextTimeout);
    };
    // Only re-run when currentIdx, texts, speed, or delay changes
  }, [currentIdx, texts, speed, delay]);

  const currentText = texts[currentIdx];

  return (
    <span className={className}>
      {displayed}
      {displayed.length === currentText.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default Typewriter;
