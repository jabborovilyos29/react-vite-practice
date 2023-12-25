import {
  ALL_PRODUCTS,
  FILTER_BY_CATEGORY,
  FILTER_BY_NAME,
  FILTER_BY_PRICE,
  FILTER_RADIO,
} from "../actions/action";

const initialData = {
  filterBy: "price",
  initialCategory: "All products",
  filteredProducts: [],
  initialPrice: 1000,
};

export const filterReducer = (state = initialData, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, filteredProducts: [...action.payload] };
      break;
    case FILTER_RADIO:
      return {
        ...state,
        filterBy: action.payload,
      };
      break;

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        initialCategory: action.payload.value,
        filteredProducts: [...action.payload.products],
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        initialCategory: "All products",
        initialPrice: Number(action.payload.value),
        filteredProducts: [...action.payload.products],
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filteredProducts: [...action.payload],
      };
    default:
      return state;
      break;
  }
};
