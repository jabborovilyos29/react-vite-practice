import { FETCH_PRODUCTS, LOADING } from "../actions/action";

const initialData = {
  products: [],
  loading: false,
  
};

export const rootReducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: [...action.payload] };
      break;
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
      break;
  }
};
