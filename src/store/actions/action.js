export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const LOADING = "LOADING";
export const FILTER_RADIO = "FILTER_RADIO";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const ALL_PRODUCTS = "ALL_PRODUCTS";

export const fetchProducts = (payload) => ({ type: FETCH_PRODUCTS, payload });
export const allProducts = (payload) => ({ type: ALL_PRODUCTS, payload });

export const loadingFunc = (payload) => ({ type: LOADING, payload });

export const filterRadio = (payload) => ({ type: FILTER_RADIO, payload });

export const filterByCategory = (payload) => ({
  type: FILTER_BY_CATEGORY,
  payload,
});

export const filterByPrice = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const filterByName = (payload) => ({
  type: FILTER_BY_NAME,
  payload,
});
