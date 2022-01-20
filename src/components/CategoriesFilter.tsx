import * as React from "react";

import CATEGORIES from "../data/categories.json";

const CategoriesFilter: React.FC = () => {
  return (
    <React.Fragment>
      <div className="category-filters">
        {CATEGORIES.map((category, key) => {
          return (
            <React.Fragment key={key}>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <div className="label">{category.label}</div>
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CategoriesFilter;
