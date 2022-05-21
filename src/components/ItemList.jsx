import Item from './Item';

const ItemList = ({ category }) => {
  return (
    <div className="grid gap-4 grid-cols-4">
      {
        category ? ( 
          <>
            {
              category.map((product) => {
                return (
                    <Item key={product.id} product={product}/>
                );
              })
            }
          </>
        ) : (
          <div className="flex justify-center ...">
            <div className="loader"></div>
          </div>
        )
      }
    </div>
  );
};

export default ItemList;