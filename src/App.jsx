import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Product from "./Pages/Product";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Developer from "./Pages/Developer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import HelpSupport from "./Pages/HelpSupport";
import TermsConditions from "./Pages/TermsConditions";
import { CartProvider } from "./Components/CartContext";
import Header from "./Components/Header";
import CheckoutPage from "./Pages/CheckOut";
import PurchasedProducts from "./Pages/PurchasedProducts";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UnProtect from "./Components/routes/UnProtect";
import Protect from "./Components/routes/ProtectRoute";
import AdminProtect from "./Components/routes/AdminRoutes";
import { Dashboard } from "./Pages/admin/Dashboard";
import DashboardHome from "./Pages/admin/Home";
import User from "./Pages/admin/users/user";
import UpdateUser from "./Pages/admin/users/updateUser";
import CreateUser from "./Pages/admin/users/createUser";
import Products from "./Pages/admin/product/Products";
import UpdateProduct from "./Pages/admin/product/UpdateProduct";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route  element={<UnProtect/>} >
            <Route path="/auth/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          <Route element={<Protect/>} >
           <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product-purchased" element={<PurchasedProducts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/developers" element={<Developer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/help-support" element={<HelpSupport />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Route>
          </Route>

          <Route element={<AdminProtect/>}>
            <Route path="/admin" element={<Dashboard/>}>
              <Route index element={<DashboardHome/>}/>
              <Route path="users" element={<User/>}/>
              <Route path="users/new" element={<CreateUser/>}/>
              <Route path="users/:id" element={<UpdateUser/>}/>
              <Route path="products" element={<Products/>}/>
              <Route path="products/:id" element={<UpdateProduct/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
