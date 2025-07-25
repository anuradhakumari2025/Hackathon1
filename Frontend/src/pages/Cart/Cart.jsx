import { useEffect } from "react";
import RippleButton from "../../Components/RippleButton/RippleButton";
import "./Cart.scss";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart } = useCart();
  // console.log(cart);

  return (
    <div className="cart">
      <h1>Cart</h1>

      <div className="main">
        <div className="left">
          <div className="productDets">
            <div className="det">
              <p>
                <i className="ri-close-large-line"></i>
              </p>
              <div className="img"></div>
              <p className="product">Product</p>
              <p className="price">Price</p>
              <p className="quan">Quantity</p>
              <p className="subtotal">Subtotal</p>
            </div>

            <div className="items">
              <div className="item">
                <p>
                  <i className="ri-close-large-line"></i>
                </p>
                <div className="img">
                  <img
                    src="https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </div>
                <p className="product">Lorem ipsum dolor sit</p>
                <p className="price">$34.00</p>
                <p className="quan">2</p>
                <p className="subtotal">$249.90</p>
              </div>

              {cart.map((item, idx) => (
                <div className="item" key={idx}>
                  <p>
                    <i className="ri-close-large-line"></i>
                  </p>
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <p className="product">{item.title}</p>
                  <p className="price">${item.discountedPrice.toFixed(2)}</p>
                  <p className="quan">1</p>
                  <p className="subtotal">${item.discountedPrice.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mobileCart">
            <div className="mobileProductDets">
              <p>
                <i className="ri-close-large-line"></i>
              </p>
              <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <p className="product">
                <span>Product: </span> Lorem ipsum dolor sit
              </p>
              <p className="price">
                <span>Price: </span> $34.00
              </p>
              <p className="quan">
                <span>Quantity: </span>2
              </p>
              <p className="subtotal">
                <span>Subtotal: </span>$249.90
              </p>
            </div>

            <div className="mobileProductDets">
              <p>
                <i className="ri-close-large-line"></i>
              </p>
              <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <p className="product">
                <span>Product: </span> Lorem ipsum dolor sit
              </p>
              <p className="price">
                <span>Price: </span> $34.00
              </p>
              <p className="quan">
                <span>Quantity: </span>2
              </p>
              <p className="subtotal">
                <span>Subtotal: </span>$249.90
              </p>
            </div>
          </div>

          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <RippleButton label="Apply Coupon" />
          </div>
        </div>

        <div className="right">
          <p>Cart Totals</p>
          <div>
            <p>Subtotal</p>
            <p>$4,567.00</p>
          </div>
          <p>Shipping</p>
          <p>Free Shipping</p>
          <div>
            <p>Total</p>
            <p>$4,567.00</p>
          </div>
          <RippleButton label="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
