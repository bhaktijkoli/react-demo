import clsx from "clsx";
import * as React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";

const ITEMS = [
  {
    label: "Categories",
    component: <CategoriesFilter />,
  },
  {
    label: "Price Range",
    component: <PriceFilter />,
  },
  {
    label: "Size",
    component: <SizeFilter />,
  },
];
const STATE: Record<string, boolean> = {};
for (const item of ITEMS) {
  STATE[item.label] = true;
}

const Sidebar: React.FC = () => {
  const [accordion, setAccordion] =
    React.useState<Record<string, boolean>>(STATE);
  return (
    <div className="sidebar">
      {ITEMS.map((item, key) => {
        const active = accordion[item.label];
        return (
          <React.Fragment key={key}>
            <button
              className="accordion"
              onClick={() => {
                accordion[item.label] = !active;
                setAccordion({ ...accordion });
              }}
            >
              {item.label}
              {active === true ? <FiChevronDown /> : <FiChevronUp />}
            </button>
            <div className={clsx({ "accordian-panel": true, active })}>
              {active && item.component && item.component}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Sidebar;
