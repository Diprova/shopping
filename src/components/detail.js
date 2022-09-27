import { useDispatch } from "react-redux";

const Detail = ({ location }) => {
  const dispatch = useDispatch();
  let productDetail = location.state;
  return (
    <div className="detail_box">
      <h2>
        <span className="details">TITLE</span> :{" "}
        {productDetail && productDetail.title}
      </h2>
      <h4>
        <span className="details">CATEGORY</span> :{" "}
        {productDetail && productDetail.category}
      </h4>
      <p>
        <span className="details">ABOUT</span>:{" "}
        {productDetail && productDetail.description}
      </p>
      <p>
        <span className="details">PRICE</span>: ${" "}
        {productDetail && productDetail.price}
      </p>
      <img
        src={productDetail && productDetail.image}
        alt="product"
        width="400"
        height="600"
        style={{ marginLeft: "40%" }}
      />
      <button
        className="price_button"
        onClick={() =>
          dispatch({ type: "SELECTED_ITEMS", payload: productDetail })
        }
      >
        <label>ADD</label>
      </button>
    </div>
  );
};

export default Detail;
