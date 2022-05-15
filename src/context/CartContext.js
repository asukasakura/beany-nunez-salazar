import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id)
  }

  const addToCart = (item, quantity) => {
    console.log({ item, quantity })
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      )
    }
    setCartList([...cartList, { ...item, quantity }])
  }

  const deleteFromCart = (item) => {
    const newCart = [...cartList]

    if(!isInCart(item.id)){
      return
    }

    const deleteProduct = newCart.filter( (prod) => prod.id !== item.id)

    setCartList(deleteProduct)
  }

  const deleteCart = () => setCartList([])

  // console.log(cartList)

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteCart,
        deleteFromCart,
        setCartList
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
