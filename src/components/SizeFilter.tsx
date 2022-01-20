import clsx from "clsx";
import * as React from "react";

import SIZES from "../data/sizes.json";
const STATE: Record<string, boolean> = {};
for (const size of SIZES) {
  STATE[String(size)] = false;
}

const SizeFilter: React.FC = () => {
  const [sizes, setSizes] = React.useState<Record<string, boolean>>(STATE);
  console.log("sizes", sizes);
  return (
    <div className="size-filter">
      {SIZES.map((size, key) => {
        const active = sizes[String(size)];
        return (
          <button
            className={clsx({ "size-btn": true, active })}
            onClick={() => {
              setSizes({ ...sizes, [String(size)]: !active });
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
