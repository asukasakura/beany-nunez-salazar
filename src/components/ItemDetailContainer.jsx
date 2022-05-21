import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from '../data/productos'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [ product, setProduct ] = useState( {} )

  useEffect( () => {
    if (id === undefined) {
      getItem().then((resp) => setProduct(resp))
    } else {
      getItem().then((resp) => setProduct(resp[id]))
    }
  }, [id])

  return (
    <div className="container mx-auto my-5">
      <ItemDetail product={product} />
    </div>
  )
}
export default ItemDetailContainer