import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Store from "../pages/store";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
