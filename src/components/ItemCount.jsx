import { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { useCartContext } from '../context/CartContext';

const ItemCount = ({ stock, id, onAdd }) => {
  const [count, setCount] = useState(0)

  const { addToCart } = useCartContext()
  const { products } = useAppContext()

  const handleSubstract = () => {
    if (count > stock) {
      setCount((count) => count - 1)
    }
  };
  const handleAdd = () => {
    if (count < stock) {
      setCount((count) => count + 1)
    }
  };

  const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			console.log("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

  return (
    <>
      <div className='my-4'>
        <button onClick={handleSubstract} className="btn btn-sm">-</button>
        <span className="mx-4">{count}</span>
        <button onClick={handleAdd} className="btn btn-sm">+</button>
      </div>
      <button onClick={() => handleClick(id, count)} className="btn btn-md">Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
