import ItemList from './ItemList';

const ItemListContainer = (props) => {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl text-center">Bienvenidos {props.greeting}!</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;