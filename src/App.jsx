import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Store from "./Pages/Store";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
