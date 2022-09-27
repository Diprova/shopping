import axios from "axios";

export const getProduct = (data) => (dispatch) => {
  console.log(data);
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
    })
    .catch((err) => console.log(err));
};

export const getCategory = (data) => (dispatch) => {
  Promise.all(
    data.categoryList.map((category) =>
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
    )
  )
    .then(
      axios.spread((...res) => {
        dispatch({
          type: "GET_CATEGORIZED_PRODUCTS_SUCCESS",
          payload: res.map((result) => result.data).flat(Infinity)
        });
      })
    )
    .catch((err) => console.log(err));
};
