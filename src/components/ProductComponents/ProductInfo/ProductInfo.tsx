import React, { FC } from 'react'
import { ProductInfoProps } from './ProductInfo.types'

const ProductInfo: FC<ProductInfoProps> = ({ name, price }) => {
  return (
    <div className="description__info">
      <div className="description__name">{name}</div>
      <div className="description__price">${price}</div>
    </div>
  )
}

export { ProductInfo }
