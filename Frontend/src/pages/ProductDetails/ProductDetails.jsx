import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import products from "../../utils/dummyData";
import RippleButton from "../../Components/RippleButton/RippleButton";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {

  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Item added to cart");
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="productDetail">
      <div className="productImg">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="detail">
        <h2>{product.title}</h2>
        <h3>{product.description}</h3>
        <p>
          Language: <span>English</span>
        </p>
        <p>
          Dimension: <span>25 x 25 x 4 cm</span>
        </p>
        <p>
          Offer: <span className="discount">{product.offer}</span>
        </p>
        <p>
          M.R.P.:
          <span className="mrp">${product.originalPrice.toFixed(2)}</span>
        </p>
        <p>
          Price: <span>${product.discountedPrice.toFixed(2)}</span>
        </p>
        <div className="btns">
          <RippleButton
            label="Add to Cart"
            onClick={() => handleAddToCart(product)}
          />
          <RippleButton label="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
