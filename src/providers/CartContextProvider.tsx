import React, { FC, ReactNode, useMemo, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

interface CartContextProviderProps {
  children: ReactNode
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [countCartItems, setCountCartItems] = useState<number | null>(null)

  const value = useMemo(
    () => ({ countCartItems, setCountCartItems }),
    [countCartItems, setCountCartItems]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider
