import { useState } from "react";
import { pizzaCart } from "../utils/pizzas";

const Cart = () => {

    const [cart, setCart] = useState(pizzaCart)
    function handleCantidad(id, accion) {
        const nuevoCarrito = cart.map((element) => {
            if(element.id === id) {
                const nuevoContador = accion == 'incrementar' ? element.count + 1 : element.count - 1
                return {...element, count:nuevoContador} //concatenacion
            }
            return element
        })
        .filter(element => element.count > 0)
        setCart(nuevoCarrito)
    }

  const formatPrice = (price) =>
    `$${price.toLocaleString('es-CL', { minimumFractionDigits: 0 })}`;

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

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
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
