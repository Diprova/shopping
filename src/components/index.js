import { useEffect } from "react";
import { getProduct } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LandingPage from "./landingPage";
import Header from "./header";
import "./index.css";

const Store = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { allproducts, selectedItem } = useSelector((state) => state.product);
  useEffect(() => dispatch(getProduct()), [dispatch]);

  const categoryList = allproducts && [
    ...new Set(allproducts.map((data) => data.category))
  ];

  console.log(selectedItem, "---selectedItem");

  return (
    <>
      <div>
        <h1 className="heading">HAPPY SHOPPING !!</h1>
        <button
          style={{ float: "right" }}
          onClick={() =>
            history.push({ pathname: "/cart", state: selectedItem })
          }
        >
          CART <span className="cart_number">{selectedItem.length}</span>
        </button>
      </div>
      <Header categoryList={categoryList} />
      <LandingPage allproducts={allproducts} />
    </>
  );
};

export default Store;
