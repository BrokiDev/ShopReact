import React, { useContext } from "react";

import { CartContext } from "../../context/cart-context";

function Categories() {
  const {} = useContext(CartContext);
  return (
    // <div>
    //   <h1>Categories</h1>
    // </div>

    <div className="category">
      {loadingCategories && <Loader />}
      {errorCategories && <h3>{errorCategories}</h3>}
      <Slider>
        <button
          onClick={() => setCategoriesFiltered(false)}
          className="categorycontain"
        >
          <p>All</p>
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilter(category.categories)}
            className="categorycontain"
          >
            <p className="categoryname">{category.categories}</p>
          </button>
        ))}
      </Slider>
    </div>
  );
}

export default Categories;
