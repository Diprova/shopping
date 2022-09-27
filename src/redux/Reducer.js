const initialState = { allproducts: [], selectedItem: [] };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        allproducts: action.payload
      };
    case "GET_CATEGORIZED_PRODUCTS_SUCCESS":
      return {
        ...state,
        allproducts: action.payload
      };

    case "SELECTED_ITEMS":
      console.log("---in---");
      return {
        ...state,
        selectedItem: [...state.selectedItem, action.payload]
      };
    default:
      return {
        ...state
      };
  }
};

export default productReducer;
