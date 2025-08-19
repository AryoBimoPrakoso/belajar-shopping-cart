import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
