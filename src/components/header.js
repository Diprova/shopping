import { useDispatch } from "react-redux";
import { getCategory, getProduct } from "../redux/Action";

const Header = ({ categoryList }) => {
  const dispatch = useDispatch();
  let selectedCategoryList = [],
    uniqueval;
  const categoryHandler = (e) => {
    console.log(e.target.value);
    let checkedVal = { cat: e.target.value, checked: e.target.checked };
    selectedCategoryList.push(checkedVal);
    uniqueval =
      selectedCategoryList &&
      selectedCategoryList.map((data) => {
        if (data.cat === e.target.value) {
          data = null;
          return { cat: e.target.value, checked: e.target.checked };
        } else {
          return { cat: data.cat, checked: data.checked };
        }
      });
  };

  const submit = (e) => {
    e.preventDefault();
    let categoryList = [];
    categoryList =
      uniqueval &&
      uniqueval
        .filter((data) => data.checked !== false)
        .map((data) => data.cat);
    categoryList && dispatch(getCategory({ categoryList }));
  };

  const reset = () => {
    uniqueval = selectedCategoryList;
    dispatch(getProduct());
  };

  return (
    <form className="category_list" onSubmit={submit}>
      {categoryList &&
        categoryList.map((category, catIndex) => {
          return (
            <div key={catIndex}>
              <input
                type="checkbox"
                id={catIndex}
                value={category}
                onChange={categoryHandler}
              />
              <label>{category}</label>
            </div>
          );
        })}
      <button type="submit" style={{ height: "20px", marginTop: "8px" }}>
        SEARCH
      </button>
      <button
        type="reset"
        onClick={reset}
        style={{ height: "20px", marginTop: "8px" }}
      >
        CLEAR
      </button>
    </form>
  );
};

export default Header;
