import "./Menu.css";

function Menu({ addToCart }) {
  const foods = [
    { id: 1, name: "Burger", price: 99 },
    { id: 2, name: "Pizza", price: 149 },
    { id: 3, name: "Fried Chicken", price: 129 },
    { id: 4, name: "French Fries", price: 79 },
    { id: 5, name: "Iced Tea", price: 49 },
    { id: 6, name: "Milk Tea", price: 89 }
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <div className="food-list">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <div className="food-icon">🍔</div>
            <h3>{food.name}</h3>
            <p>₱{food.price}</p>

            <button onClick={() => addToCart(food)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;