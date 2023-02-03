import React, { FC } from 'react'
import DescriptionsButtons from '../DescriptionsButtons'
import ProductInfo from '../ProductInfo'

const ProductDescription: FC = () => {
  return (
    <div className="product__description description">
      <div className="description__inner">
        <ProductInfo name="ITEM NAME" price={'235.00'} />
        <DescriptionsButtons />
      </div>
    </div>
  )
}

export { ProductDescription }
