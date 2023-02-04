import React, { FC, useCallback } from 'react'
import { FcPlus } from 'react-icons/fc'
import { useCartContext } from '../../contexts/CartContext'
import { Button } from '../Button/Button'

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
      <Button
        className="description__btn-add-to-cart"
        onClick={addItemInCard}>
        Add to Cart
      </Button>
      <Button
        className="description__btn-increment-count-cart"
        onClick={incrementItemInCard}>
        <FcPlus />
      </Button>
    </div>
  )
}

export { ButtonCart }
