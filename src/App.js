import "./styles.css";
import Store from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/detail";
import Cart from "./components/cart";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/page_detail" component={Detail} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}
