import products from "../../utils/dummyData";
import "../../Components/Product/Product.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RippleButton from "../../Components/RippleButton/RippleButton";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="product">
      <h1>Recipes Book</h1>

      <div className="productCards">
        {products.map((product, idx) => (
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
    </div>
  );
};

export default Products;
