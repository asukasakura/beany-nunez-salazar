import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {

  const { title, brand, price, stock, pictureUrl, description, category, id } =
		product

	const [terminar, setTerminar] = useState(false)

	const onAdd = (count) => {
		setTerminar(true)
	}

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img src={pictureUrl} alt={title} className="" />
        </div>
        <div className="">
          <div className="product-header mb-10 border-b-2">
            <h3 className="text-2xl">{title}</h3>
            <strong>{brand}</strong> | <small>{category}</small>
          </div>
          <div className="mb-10">
            {description}            
          </div>
          <div>
            <strong className="text-xl">${price}</strong>
          </div>
          <div className='my-5'>
            { terminar ? 
              <Link to={'/cart'} className='btn bg-green-300'>Terminar mi compra</Link>
              :
              <ItemCount stock={stock} onAdd={onAdd} id={id} />
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemDetail