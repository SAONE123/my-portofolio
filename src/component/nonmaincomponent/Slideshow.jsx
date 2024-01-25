import React, { useEffect, useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setcurrentSlide] = useState(2);
  const goToPrev = () => {
    setcurrentSlide((prevSlide) => (prevSlide - 1) % slides.length);
  };
  const goToNext = () => {
    setcurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  useEffect(() => {
    const interValid = setInterval(goToNext, 3000);
    return () => clearInterval(interValid);
  }, [currentSlide]);

  return (
    <>
      <div className="slideshow-container">
        <img src={slides[currentSlide].imgUrl} alt="err" />
        <div className="slide">
          <a
            href={slides[currentSlide].pdf}
            download={slides[currentSlide].content}
          >
            {slides[currentSlide].content}
          </a>
        </div>
        <div className="prevnex">
          <button onClick={goToPrev}>&lt; </button>
          <button onClick={goToNext}>&#62;</button>
        </div>
      </div>
    </>
  );
}
export default Slides;
