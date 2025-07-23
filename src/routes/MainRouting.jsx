import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Login from "../pages/Login/Login";

const MainRouting = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouting;
