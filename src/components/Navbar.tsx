import * as React from "react";
import { FiSearch } from "react-icons/fi";
import useFilter from "../hooks/useFilter";

const Navbar: React.FC = () => {
  const { search } = useFilter();
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">Shoe.</div>
      </div>
      <div className="right">
        <div className="search">
          <FiSearch />
          <input
            type="text"
            value={search.get()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              search.set(e.currentTarget.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
