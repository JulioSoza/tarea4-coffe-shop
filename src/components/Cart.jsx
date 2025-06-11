import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Resumen de la orden</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Imagen</th>
            <th>Cantidad</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td><img src={item.image} alt={item.title} width="80" /></td>
              <td>{item.quantity}</td>
              <td>Q{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: Q{total}</h2>
      <button>Pagar ahora</button>
    </div>
  );
};

export default Cart;



