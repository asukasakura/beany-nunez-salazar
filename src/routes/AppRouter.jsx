import {BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import HeaderMenu from '../components/HeaderMenu';
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";

import CartContextProvider from '../context/CartContext';

const AppRouter = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
          <NavBar></NavBar>
          
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Beancitos"/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
              <HeaderMenu />
            </ul>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default AppRouter