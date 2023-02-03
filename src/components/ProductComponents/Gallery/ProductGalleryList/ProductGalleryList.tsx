import React, { FC } from 'react'
import { ProductGalleryItem } from '../ProductGalleryItem/ProductGalleryItem'
import { ProductGalleryListProps } from './ProductGalleryList.types'

const ProductGalleryList: FC<ProductGalleryListProps> = ({
  imagesSrc,
  isViewAll,
}) => {
  return (
    <div className={`gallery__inner ${isViewAll ? 'gallery__inner_full' : ''}`}>
      {imagesSrc.map(src => (
        <ProductGalleryItem key={src} imgSrc={src} />
      ))}
    </div>
  )
}

export { ProductGalleryList }
