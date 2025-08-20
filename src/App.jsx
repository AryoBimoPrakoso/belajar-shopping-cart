import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id/:title" element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
