import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Carousel.css";

function Carousel({ children }) {
  const [id, setid] = useState(0);
  const { length } = children;

  const handlePrevious = () => {
    const newid = id - 1;
    setid(newid < 0 ? length - 1 : newid);
  };

  const handleNext = () => {
    const newid = id + 1;
    setid(newid >= length ? 0 : newid);
  };

  return (
    <div className="carousel">
      <FaChevronLeft className="leftArrow" onClick={handlePrevious} />
      {children[id]}
      <FaChevronRight className="rightArrow" onClick={handleNext} />
    </div>
  );
}

export default Carousel;
