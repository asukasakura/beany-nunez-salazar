import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getItem } from '../data/productos'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
  const { catId } = useParams()
  const [ category, setCategory ]  = useState()

  useEffect(() => {
    if (catId === undefined) {
			getItem().then((resp) => setCategory(resp))
		} else {
			getItem().then((resp) =>
				setCategory(
          resp.filter((product) => product.category === catId)
          )
        )
		}
  }, [catId])

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl text-center capitalize">{catId ? `${catId}` : `Bienvenidos ${greeting}!`}</h2>
        <ItemList category={category} />
    </div>
  )
}

export default ItemListContainer