import { useState } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import CustomerForm from "./components/CustomerForm";
import OrderSummary from "./components/OrderSummary";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    address: ""
  });

  function addToCart(food) {
    const existing = cart.find((item) => item.id === food.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  }

  function increase(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <>
      <Header />

      <main className="container">
        <Menu addToCart={addToCart} />

        <div className="content">
          <div>
            <Cart
              cart={cart}
              increase={increase}
              decrease={decrease}
            />
          </div>

          <div>
            <CustomerForm
              customer={customer}
              setCustomer={setCustomer}
            />

            <OrderSummary
              cart={cart}
              customer={customer}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;