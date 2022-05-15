import { useCartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

  const { addToCart } = useCartContext()

  function handleOnAdd(count) {
    // console.log(count)
    addToCart(producto, count)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img src={producto.pictureUrl} alt={producto.title} className="" />
        </div>
        <div className="">
          <div className="product-header mb-10 border-b-2">
            <h3 className="text-2xl">{producto.title}</h3>
            <strong>{producto.brand}</strong>
          </div>
          <div className="mb-10">
            {producto.description}            
          </div>
          <div>
            <strong className="text-xl">${producto.price}</strong>
          </div>
          <ItemCount initial={1} stock={ producto.stock } onAdd={ handleOnAdd } />
        </div>
      </div>
    </>
  )
}
export default ItemDetail