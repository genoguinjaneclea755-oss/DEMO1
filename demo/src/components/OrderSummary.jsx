import "./OrderSummary.css";

function OrderSummary({ cart, customer }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function placeOrder() {
    if (cart.length === 0) {
      alert("Please add an item to your cart.");
      return;
    }

    if (!customer.name || !customer.contact || !customer.address) {
      alert("Please complete your customer information.");
      return;
    }

    alert(
      `Order placed successfully!\n\nCustomer: ${customer.name}\nTotal: ₱${total}`
    );
  }

  return (
    <div className="summary">
      <h2>Order Summary</h2>

      <div className="total">
        <span>Total Amount:</span>
        <strong>₱{total}</strong>
      </div>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;