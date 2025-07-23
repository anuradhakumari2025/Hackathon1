import "./ProductDetails.scss";
import recipe2 from "../../assets/recipe2.png";
const ProductDetails = () => {
  return (
    <div className="productDetail">
      <div className="productImg">
        <img src={recipe2} alt="" />
      </div>
      <div className="detail">
        <h2>Omega Recipe</h2>
        <h3>
          Discover delicious, easy to follow dinner recipes. You’ll get a fresh
          recipe for each night of the week.
        </h3>
        <p>
          Language: <span>English</span>
        </p>
        <p>
          Dimension: <span>25 x 25 x 4 cm</span>
        </p>
        <p>
          Price: <span>$50.0</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
