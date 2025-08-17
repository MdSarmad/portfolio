// import { useState, useEffect } from "react";

// interface TypingEffectProps {
//   texts: string[];
//   speed?: number;
//   deleteSpeed?: number;
//   delayBetweenTexts?: number;
// }

// export function TypingEffect({ 
//   texts, 
//   speed = 100, 
//   deleteSpeed = 50, 
//   delayBetweenTexts = 2000 
// }: TypingEffectProps) {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const fullText = texts[currentTextIndex];
      
//       if (isDeleting) {
//         setCurrentText(fullText.substring(0, currentText.length - 1));
        
//         if (currentText === "") {
//           setIsDeleting(false);
//           setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         }
//       } else {
//         setCurrentText(fullText.substring(0, currentText.length + 1));
        
//         if (currentText === fullText) {
//           setTimeout(() => setIsDeleting(true), delayBetweenTexts);
//         }
//       }
//     }, isDeleting ? deleteSpeed : speed);

//     return () => clearTimeout(timeout);
//   }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetweenTexts]);

//   return (
//     <span className="inline-block">
//       {currentText}
//       <span className="animate-pulse">|</span>
//     </span>
//   );
// }

import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypingEffect({ texts, speed = 100, deleteSpeed = 50, pauseDuration = 2000 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="relative">
      {displayText}
      <span 
        className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse"
        style={{
          animation: "blink 1s ease-in-out infinite"
        }}
      />
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </span>
  );
}