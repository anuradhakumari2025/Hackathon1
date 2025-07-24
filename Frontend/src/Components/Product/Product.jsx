import "./Product.css";
import recipe2 from "../../assets/recipe2.png";
import products from "../../utils/dummyData";

const Product = () => {
  return (
    <div className="product">
      <h1>Recipes Book</h1>
      <div className="productCards">
        {products.map((product, idx) => (
          <div className="productCard" key={idx}>
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
                  ${product.discountedPrice.toFixed(2)}{" "}
                </span>
              </h4>
            </div>
            <button className="add">add to cart</button>
          </div>
        ))}
      </div>
      <div className="viewMore">View More</div>
    </div>
  );
};

export default Product;
