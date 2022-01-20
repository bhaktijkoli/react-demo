import * as React from "react";

import CATEGORIES from "../data/categories.json";
import useFilter from "../hooks/useFilter";

const CategoriesFilter: React.FC = () => {
  const { categories } = useFilter();
  const selectedCategories = categories.get();
  return (
    <React.Fragment>
      <div className="category-filters">
        {CATEGORIES.map((category, key) => {
          return (
            <React.Fragment key={key}>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.label)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.currentTarget.checked) {
                      categories.set([...selectedCategories, category.label]);
                    } else {
                      categories.set(
                        [...selectedCategories].filter(
                          (c) => c !== category.label
                        )
                      );
                    }
                  }}
                />
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
