import { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from '../data/productos';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB();
  }, []); 

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