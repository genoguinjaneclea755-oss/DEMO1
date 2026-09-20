import "./CustomerForm.css";

function CustomerForm({ customer, setCustomer }) {
  return (
    <div className="customer-form">
      <h2>Customer Information</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={customer.name}
        onChange={(e) =>
          setCustomer({ ...customer, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Contact Number"
        value={customer.contact}
        onChange={(e) =>
          setCustomer({ ...customer, contact: e.target.value })
        }
      />

      <textarea
        placeholder="Delivery Address"
        value={customer.address}
        onChange={(e) =>
          setCustomer({ ...customer, address: e.target.value })
        }
      />
    </div>
  );
}

export default CustomerForm;