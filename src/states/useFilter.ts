import { createState, useState } from "@hookstate/core";

interface State {
  categories: string[];
  minPrice: number;
  maxPrice: number;
  sizes: number[];
}

const state = createState<State>({
  categories: [],
  minPrice: 50,
  maxPrice: 700,
  sizes: [],
});

const useFilter = () => {
  return useState(state);
};

export default useFilter;
