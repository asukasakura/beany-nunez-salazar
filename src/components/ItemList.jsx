import Item from './Item';

const ItemList = ({products}) => {
  return (
    <div className="grid gap-4 grid-cols-4">
      {
        products.length ? ( 
          <>
            {
              products.map((product) => {
                return (
                    <Item key={product.id} product={product}/>
                );
              })
            }
          </>
        ) : (
          <div class="flex justify-center ...">
            <div className="loader"></div>
          </div>
        )
      }
    </div>
  );
};

export default ItemList;