import { Children, createContext, useMemo } from "react"
import { useState } from "react"
//import { pizzaCart } from "../utils/pizzas";
import Swal from 'sweetalert2';

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

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

  const agregarCarrito = (pizza) => {
    //actualiza estado carrito
    setCart( prevCart => {
      const existPizza = prevCart.find( item => item.id === pizza.id );

      // Comprobamos que si la pizza ha sido ingresada en el carrito, solo actualizamos el contador
      if (existPizza) {
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
    
      //acá agregar sweetalert
      // Alerta SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `Pizza ${pizza.name} se ha añadido al carrito`,
      showConfirmButton: false,
      timer: 2500
    });
  }

  const clearCart = () => setCart([])

  const value = useMemo(() => ({
    clearCart
  }), [cart, total])

  return (
    <CartContext.Provider
    value={{cart, handleCantidad, formatPrice, total, agregarCarrito, clearCart}}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider