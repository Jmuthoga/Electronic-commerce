import React from "react";
import "./Cart.css";
import "./Rcart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({ cart, setCart }) => {
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((val) => {
        return val.id === product.id ? { ...exist, qty: exist.qty + 1 } : val;
      })
    );
  };

  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((val) => {
        return val.id === product.id ? { ...exist, qty: exist.qty - 1 } : val;
      })
    );
  };

  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((val) => {
          return val.id !== product.id;
        })
      );
    }
  };

  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className="cart">
        <h3>#cart</h3>
        {cart.length === 0 && (
          <>
            <div className="empty_cart">
              <h2>Your Shopping cart is empty</h2>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </>
        )}
        <div className="container">
          {cart.map((val) => {
            return (
              <>
                <div className="box">
                  <div className="img_box">
                    <img src={val.image} alt=""></img>
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h4>{val.cat}</h4>
                      <h3>{val.Name}</h3>
                      <p>Price: ${val.price}</p>
                      <p>Total: ${val.price * val.qty}</p>
                    </div>
                    <div className="quantity">
                      <button onClick={() => incqty(val)}>+</button>
                      <input type="number" value={val.qty}></input>
                      <button onClick={() => decqty(val)}>-</button>
                      <div className="icon">
                        <li onClick={() => removeproduct(val)}>
                          <AiOutlineClose />
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="bottom">
          {cart.length > 0 && (
            <>
              <div className="total">
                <h4>Sub Total: ${total}</h4>
              </div>
              <button>Checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
