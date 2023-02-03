import React, { FC } from 'react'
import { ProductGalleryItemProps } from './ProductGalleryItem.types'

const ProductGalleryItem: FC<ProductGalleryItemProps> = ({ imgSrc }) => {
  return <img src={imgSrc} alt="product-img" className="gallery__img" />
}

export { ProductGalleryItem }
