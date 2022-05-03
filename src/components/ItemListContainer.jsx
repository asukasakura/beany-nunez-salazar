import { useEffect, useState } from 'react';
import { productList } from '../data/productos';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

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
    <div className="container mx-auto my-5">
      <h2 className="text-xl text-center">Bienvenidos {props.greeting}!</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;