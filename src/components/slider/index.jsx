import { useRef, memo } from "react";
import "./styles.css";

const Slider = ({ children }) => {
  const sliderContentRef = useRef(null);
  const next = useRef(null);
  const previous = useRef(null);

  const handleNext = () => {
    sliderContentRef.current.scrollLeft +=
      sliderContentRef.current.children[0].offsetWidth;
  };

  const handlePrevious = () => {
    sliderContentRef.current.scrollLeft -=
      sliderContentRef.current.children[0].offsetWidth;
  };

  return (
    <div className="slider">
      <button onClick={handlePrevious} type="button" className="previous">
        <span>&lt;</span>
      </button>
      <button onClick={handleNext} className="next">
        <span>&gt;</span>
      </button>
      <div ref={sliderContentRef} className="slidercontent">
        {children}
      </div>
    </div>
  );
};

export default memo(Slider);
