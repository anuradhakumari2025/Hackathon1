import "./Product.css";
import { Link, useNavigate } from "react-router-dom";
import products from "../../utils/dummyData";
import RippleButton from "../RippleButton/RippleButton";
import { useEffect } from "react";

const Product = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="product">
      <h1>Recipes Book</h1>
      <div className="productCards">
        {products.slice(0, 3).map((product, idx) => (
          <div
            className="productCard"
            key={idx}
            onClick={() => handleClick(product.id)}
          >
            <div className="productImg">
              <img src={product.image} alt="" />
            </div>
            <h2>{product.title} </h2>
            <p>{product.description}</p>
            <div className="price">
              <h4 className="total">TOTAL</h4>
              <h4>
                <span className="discount">{product.offer} </span>
                <span className="mrp">${product.originalPrice.toFixed(2)}</span>
                <span className="discountPrice">
                  ${product.discountedPrice.toFixed(2)}
                </span>
              </h4>
            </div>
            <RippleButton className="add" label="Add to Cart" />
          </div>
        ))}
      </div>
      <Link to="/products" className="productLink">
        <div className="viewMore"> View More</div>
      </Link>
    </div>
  );
};

export default Product;
