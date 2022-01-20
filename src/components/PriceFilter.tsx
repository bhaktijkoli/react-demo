import * as React from "react";
import MultiRangeSlider from "multi-range-slider-react";

const PriceFilter: React.FC = () => {
  const [minValue, set_minValue] = React.useState(250);
  const [maxValue, set_maxValue] = React.useState(600);
  const handleInput = (e: any) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
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
        minValue={minValue}
        maxValue={maxValue}
        onInput={handleInput}
      />
      <div className="price-range">
        <div className="price-min">&#36;{minValue}</div>
        <div className="price-min">&#36;{maxValue}</div>
      </div>
    </React.Fragment>
  );
};

export default PriceFilter;
