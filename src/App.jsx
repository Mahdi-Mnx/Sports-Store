import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home"
import Product from "./Pages/Product";
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/product" element={<Product/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
