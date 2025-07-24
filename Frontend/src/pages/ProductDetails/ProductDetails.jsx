import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import products from "../../utils/dummyData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

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
          M.R.P.: <span className="mrp">${product.originalPrice.toFixed(2)}</span>
        </p>
        <p>
          Price: <span>${product.discountedPrice.toFixed(2)}</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
