import React, { useEffect, useState, useRef } from "react";

const words = ["Future", "Career" , "Skills", "Opportunities", "Success", "Knowledge"];
const typingDelay = 130;
const erasingDelay = 70;
const nextWordDelay = 1200;

const TypewriterEffect = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const timeout = useRef();

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (isTyping) {
      if (display.length < currentWord.length) {
        timeout.current = setTimeout(() => {
          setDisplay(currentWord.slice(0, display.length + 1));
        }, typingDelay);
      } else {
        timeout.current = setTimeout(() => setIsTyping(false), nextWordDelay);
      }
    } else {
      if (display.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplay(currentWord.slice(0, display.length - 1));
        }, erasingDelay);
      } else {
        timeout.current = setTimeout(() => {
          setIsTyping(true);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 500);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [display, isTyping, wordIndex]);

  return (
    <span className="typewriter-effect">
      {display}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
