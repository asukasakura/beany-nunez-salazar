const ItemListContainer = (props) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-4xl">Bienvenidos {props.greeting}!</h1>
    </div>
  )
}
export default ItemListContainer