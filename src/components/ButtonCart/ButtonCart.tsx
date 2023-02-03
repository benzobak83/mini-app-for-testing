import React, { FC, useCallback } from 'react'
import { FcPlus } from 'react-icons/fc'
import { useCartContext } from '../../contexts/CartContext'

const ButtonCart: FC = () => {
  const { countCartItems, setCountCartItems } = useCartContext()

  const addItemInCard = useCallback(() => {
    !countCartItems && setCountCartItems(1)
  }, [countCartItems])

  const incrementItemInCard = useCallback(() => {
    setCountCartItems((prev: number) => prev + 1)
  }, [])

  return (
    <div className="description__buttons-cart">
      <button
        className="description__btn-add-to-cart btn"
        onClick={addItemInCard}>
        Add to Cart
      </button>
      <button
        className="description__btn-increment-count-cart btn"
        onClick={incrementItemInCard}>
        <FcPlus />
      </button>
    </div>
  )
}

export { ButtonCart }
