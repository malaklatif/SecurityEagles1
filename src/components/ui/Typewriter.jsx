import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 650, delay = 0, className = "" }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    let timeout;
    let resetTimeout;
    const startTyping = () => {
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          // After finished, wait, then reset and start again
          resetTimeout = setTimeout(() => {
            setDisplayed("");
            i = 0;
            startTyping();
          }, 1200); // Cursor blinks for 1.2s before restarting
        }
      }, speed);
    };
    timeout = setTimeout(startTyping, delay);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(resetTimeout);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length === text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default Typewriter;
