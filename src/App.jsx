import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Store from "./Pages/Store";
import About from "./Pages/About"
import Man from "./Pages/Man"
import Women from "./Pages/Women"
import Contact from "./Pages/Contact"
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
            <Route path="/man" element={<Man />} />
            <Route path="/women" element={<Women />} />
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
