import * as React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import useFilter from "../states/useFilter";

const PriceFilter: React.FC = () => {
  const { minPrice, maxPrice } = useFilter();
  const handleInput = (e: any) => {
    minPrice.set(e.minValue);
    maxPrice.set(e.maxValue);
  };
  return (
    <React.Fragment>
      <MultiRangeSlider
        min={0}
        max={2000}
        step={50}
        ruler={false}
        label={false}
        preventWheel={false}
        minValue={minPrice.get()}
        maxValue={maxPrice.get()}
        onInput={handleInput}
      />
      <div className="price-range">
        <div className="price-min">&#36;{minPrice.get()}</div>
        <div className="price-min">&#36;{maxPrice.get()}</div>
      </div>
    </React.Fragment>
  );
};

export default PriceFilter;
