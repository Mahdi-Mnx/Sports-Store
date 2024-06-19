import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
import Store from "./Pages/Store";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Store />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
