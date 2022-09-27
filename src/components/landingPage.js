import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const LandingPage = ({ allproducts }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const cartDetails = (data) => {
    dispatch({ type: "SELECTED_ITEMS", payload: data });
  };
  return (
    <div className="store_list">
      {allproducts &&
        allproducts.map((data) => {
          return (
            <div key={data.id} className="product">
              <h3
                className="title title_details"
                onClick={() =>
                  history.push({ pathname: "/page_detail", state: data })
                }
              >
                {data.title}
              </h3>
              <p className="description">
                <span className="details">Details</span> : {data.description}
              </p>
              <p>
                <span className="details">Price</span> : $ {data.price}
              </p>
              <img
                src={data.image}
                alt="product"
                width="200"
                height="200"
                style={{ margin: "0 30%" }}
              />
              <button
                className="price_button"
                onClick={() => cartDetails(data)}
              >
                ADD
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default LandingPage;
