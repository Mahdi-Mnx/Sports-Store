import React from "react";
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

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product-purchased" element={<PurchasedProducts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/developers" element={<Developer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/help-support" element={<HelpSupport />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
