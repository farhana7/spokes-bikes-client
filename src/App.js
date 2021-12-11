import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Products from "./Pages/Home/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          {/* <Route path="/about">
            <Home />
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
