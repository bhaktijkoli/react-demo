import clsx from "clsx";
import * as React from "react";

import SIZES from "../data/sizes.json";
import useFilter from "../hooks/useFilter";

const SizeFilter: React.FC = () => {
  const { sizes } = useFilter();
  const selectedSizes = sizes.get();
  return (
    <div className="size-filter">
      {SIZES.map((size, key) => {
        const active = selectedSizes.includes(size);
        return (
          <button
            className={clsx({ "size-btn": true, active })}
            onClick={() => {
              if (active) {
                sizes.set([...selectedSizes].filter((s) => s !== size));
              } else {
                sizes.set([...selectedSizes, size]);
              }
            }}
            key={key}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};

export default SizeFilter;
