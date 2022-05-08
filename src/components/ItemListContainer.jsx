import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { productList } from '../data/productos'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  const { id } = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState( true )

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productData = id
        ? productList.filter((item) => item.category === id)
        : productList
      resolve(productData)
    }, 2000)
  })

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts
      setProducts(result)
      setLoading( false )
    } catch (error) {
      console.log(error)
      alert('No podemos mostrar los productos en este momento')
    }
  };

  useEffect(() => {
    getProductsFromDB()
  }, [id])

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl text-center">{id ? `Category ${id}` : 'Bienvenidos!'}</h2>
      { loading ?
          <h1>loading ...</h1>
        :
          <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer