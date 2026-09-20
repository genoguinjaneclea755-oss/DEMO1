import "./Cart.css";

function Cart({ cart, increase, decrease }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <p>₱{item.price} each</p>
            </div>

            <div className="quantity">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;