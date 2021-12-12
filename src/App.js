import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Products from "./Pages/Home/Products/Products";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrder/MyOrders";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import Review from "./Pages/Dashboard/Review/Review";
import Pay from "./Pages/Dashboard/Pay/Pay";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/about">
            <Home />
          </Route> */}

            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>

            <PrivateRoute path="/addAProduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
