import { useState } from 'react'
import { useCartContext } from '../context/CartContext';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  const { addToCart } = useCartContext()

  const handleSubstract = () => {
    if (count > initial) {
      setCount((counter) => counter - 1)
    }
  };
  const handleAdd = () => {
    if (count < stock) {
      setCount((counter) => counter + 1)
    }
  };

  return (
    <>
      <div className='my-4'>
        <button onClick={handleSubstract} className="btn btn-sm">-</button>
        <span className="mx-4">{count}</span>
        <button onClick={handleAdd} className="btn btn-sm">+</button>
      </div>
      <button onClick={() => onAdd(count)} className="btn btn-md">Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
