import { useContext, useState } from "react";
import { pizzaCart } from "../utils/pizzas";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserProvider";
import Swal from "sweetalert2";

const Cart = () => {

const {cart, handleCantidad, formatPrice, total, setCart, clearCart} = useContext(CartContext)
const {token} = useContext(UserContext) //traemos en token

//
const handleCompra = () => {
  //Si no hay token se muestra error
  if (!token) {
    Swal.fire({
      icon: "error",
      title: "Debes iniciar sesion antes de comprar",
    });
    return;
  }
  if(cart.length === 0) {
    Swal.fire({
        icon: "warning",
        title: "Tu carrito está vacío",
      });
    return;
  }
//Mensaje compra exitosa
  Swal.fire({
    icon:"success",
    title: "Compra exitosa",
    text: "Tu compra se ha provesa. Gracias por tu pedido.",
    confirmButtonText: "Aceptar",
  });
  //LImpia el carrito
  clearCart();
};


  return (
    <div className="container my-4">
      <h5>Detalles del pedido:</h5>
      <ul className="list-unstyled">

        {cart.map((item) => (
          <li key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
            <img src={item.img} alt={item.name} className="me-2" style={{ width: '50px' }} />
            <div className="me-auto">{item.name}</div>
            <div className="me-3">{formatPrice(item.price)}</div>
            <div className="input-group input-group-sm" style={{ width: '100px' }}>
              <button className="btn btn-outline-danger" onClick={() => handleCantidad(item.id, 'decrementar')}>-</button>
              <input
                type="text"
                className="form-control text-center"
                value={item.count}
                readOnly
              />

              <button className="btn btn-outline-primary" onClick={() => handleCantidad(item.id, 'incrementar')}>+</button>
            </div>
          </li>
          
        ))}

      </ul>
      <h4 className="mt-4">Total: {formatPrice(total)}</h4>
      <button className="btn btn-dark mt-2" disabled={token === false} onClick={handleCompra}>Pagar</button>
    </div>
  );
};

export default Cart;
