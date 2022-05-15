import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productList as productData } from '../data/productos'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [producto, setProducto] = useState( {} )
  const [loading, setLoading] = useState( true )

  useEffect( () => {

    (async () => {
      const productData = await getProductDetail()
      if (productData) {
        setProducto(productData)
        setLoading( false )
      }
    })()
    
  }, [id])

  const getProductDetail = () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve( productData.find( p => p.id == id) )
      }, 1000)
    })
  }

  return (
    <div className="container mx-auto my-5">
      { loading ?
          <h1>loading ...</h1>
        :
          <ItemDetail producto={producto} />
      }
    </div>
  )
}
export default ItemDetailContainer