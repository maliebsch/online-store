import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ itemsInCart, removeFromCart }) => {
  return (
    <div className={styles.cart}>
      {itemsInCart.length === 0 ? (
        <div className="cart-header">
          <p>Your cart is currently empty...</p>
        </div>
      ) : (
        <div className="cart-header">
          <p>You have {itemsInCart.length} item(s) in your cart</p>
        </div>
      )}
      <ul className={styles.cartListing}>
        {itemsInCart.map((item) => {
          return (
            <li className={styles.cartItem} key={item.id}>
              <div className={styles.cartItemInner}>
                <div className={styles.cartItemInfo}>
                  <p className={styles.cartItemTitle}>{item.title}</p>
                  <div className={styles.qtyPrice}>
                    <input
                      type="number"
                      value={item.count}
                      className={styles.cartItemCount}
                    />
                    <span>£{item.price}</span>
                  </div>
                </div>
                <div className={styles.cartItemImg}>
                  <img
                    src={`/products/${item.image_url}`}
                    alt={item.title}
                    className={styles.thumbnail}
                  />
                </div>
              </div>
              <button
                className={styles.btnRemove}
                id="remove"
                onClick={() => removeFromCart(item)}
              >
                Remove item
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.cartTotal}>
        <p>
          Order Total:
          <span className={styles.totalPrice}>
            £{itemsInCart.reduce((a, c) => a + c.price * c.count, 0)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
