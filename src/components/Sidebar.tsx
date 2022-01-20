import clsx from "clsx";
import * as React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ITEMS = [
  {
    label: "Categories",
  },
  {
    label: "Price Range",
  },
  {
    label: "Size",
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
            <div className={clsx({ "accordian-panel": true, active })}></div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Sidebar;
