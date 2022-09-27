import { useState } from "react";

const Cart = ({ location }) => {
  let selectedItem = location.state;
  const [item, setItem] = useState(selectedItem);

  const cancelHandler = (index, e) => {
    e.preventDefault();
    let modifiedArr =
      selectedItem && selectedItem.filter((data, i) => i !== index);
    setItem(modifiedArr);
  };

  const totalPrice = item && item.reduce((a, b) => a + b.price, 0).toFixed(2);
  return (
    <div>
      <h3>Your Cart:</h3>
      {item &&
        item.map((data, index) => {
          return (
            <div className="cart_box">
              <button
                className="cancel"
                onClick={(e) => cancelHandler(index, e)}
              >
                cancel
              </button>
              <p>{data.title}</p>
              <p> ${data.price}</p>
              <img src={data.image} alt="img" width="100" height="100" />
            </div>
          );
        })}

      <button className="cart_total">TOTAL : $ {totalPrice}</button>
    </div>
  );
};

export default Cart;
