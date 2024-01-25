import React, { useState, useEffect } from "react";

const TextAnimation = () => {
  const [index, setIndex] = useState(0);
  const texts = ["My Name Is Alfian NS", "independent Developer"]; // Array of texts to animate

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000); // Change text every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-animation text-[200% ]">
      <h1>{texts[index]}</h1>
    </div>
  );
};

export default TextAnimation;
