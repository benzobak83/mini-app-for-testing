import React from 'react'
import { FC } from 'react'
import ProductGallery from '../../components/ProductComponents/Gallery/ProductGallery'

import ProductAvatar from '../../components/ProductComponents/ProductAvatar'
import ProductDescription from '../../components/ProductComponents/ProductDescription'

import './Product.scss'

const Product: FC = () => {
  return (
    <main className="product">
      <div className="product__inner">
        <ProductGallery />
        <ProductAvatar />
        <ProductDescription />
      </div>
    </main>
  )
}

export { Product }
