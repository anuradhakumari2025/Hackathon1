import "./Product.css";
import recipe1 from "../../assets/recipe1.png"
import recipe2 from "../../assets/recipe2.png"
import recipe3 from '../../assets/recipe3.png'

const Product = () => {
  return (
    <div className="product">
      <h1>Recipes Book</h1>
      <div className="productCards">
        <div className="productCard">
          <div className="productImg">
            <img src={recipe1} alt="" />
          </div>
          <h2>Focus Ground Coffee</h2>
          <p>
            Organic coffee powered by lion’s mane and chaga mushrooms. See
            results in as little as 7 days with a focus that tastes unbelievably
            delicious.
          </p>
           <div className="price">
            <h4 className="total">TOTAL</h4>
            <h4>
             <span className="discount"> 50% OFF</span> <span className="mrp">$40.00</span>
              <span className="discountPrice">$20.00</span>
            </h4>
          </div>
          <button className="add">
            add to cart
          </button>
        </div>

        <div className="productCard">
          <div className="productImg">
            <img src={recipe2} alt="" />
          </div>
          <h2>Focus Ground Coffee</h2>
          <p>
            Organic coffee powered by lion’s mane and chaga mushrooms. See
            results in as little as 7 days with a focus that tastes unbelievably
            delicious.
          </p>
          <div className="price">
            <h4 className="total">TOTAL</h4>
            <h4>
             <span className="discount"> 50% OFF</span> <span className="mrp">$40.00</span>
              <span className="discountPrice">$20.00</span>
            </h4>
          </div>
          <button className="add">
            add to cart
          </button>
        </div>

        <div className="productCard">
          <div className="productImg">
            <img src={recipe3} alt="" />
          </div>
          <h2>Focus Ground Coffee</h2>
          <p>
            Organic coffee powered by lion’s mane and chaga mushrooms. See
            results in as little as 7 days with a focus that tastes unbelievably
            delicious.
          </p>
           <div className="price">
            <h4 className="total">TOTAL</h4>
            <h4>
             <span className="discount"> 50% OFF</span> <span className="mrp">$40.00</span>
              <span className="discountPrice">$20.00</span>
            </h4>
          </div>
          <button className="add">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
