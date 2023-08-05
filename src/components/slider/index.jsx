import "./styles.css";

const Slider = ({ children }) => {
  return (
    <div className="slider">
      <button type="button" className="previous">
        <span>&lt;</span>
      </button>
      <button className="next">
        <span>&gt;</span>
      </button>
      <div className="slidercontent">{children}</div>
    </div>
  );
};

export default Slider;
