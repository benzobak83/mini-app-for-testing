import React, { createContext, SetStateAction, useContext } from 'react'

export type TCartContextValue = {
  countCartItems: number | null
  setCountCartItems: React.Dispatch<SetStateAction<number>>
}

export const CartContext = createContext<TCartContextValue>({
  countCartItems: null,
  setCountCartItems: () => {},
})

export const useCartContext = () => useContext(CartContext)
