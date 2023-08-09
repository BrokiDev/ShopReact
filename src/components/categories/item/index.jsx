import "./styles.css";

const CategoriesItem = ({ onSelectedCategory, type, name }) => {
  return (
    <button
      onClick={onSelectedCategory}
      type={type}
      className="categorycontain"
    >
      <p>{name}</p>
    </button>
  );
};

export default CategoriesItem;
