import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Store from "./Pages/Store";
<<<<<<< HEAD
import About from "./Pages/About"
import Contact from "./Pages/Contact"
=======
import About from "./Pages/About";
import Contact from "./Pages/Contact";
>>>>>>> c6a6d4d2a5a18226fd9459acaae94a838ef4714c
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
