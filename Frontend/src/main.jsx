import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { ToastContainer, toast } from "react-toastify";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <ToastContainer />
      <App />
    </CartProvider>
  </BrowserRouter>
);
