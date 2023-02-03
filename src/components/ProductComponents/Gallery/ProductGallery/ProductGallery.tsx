import React, { FC, useState, useEffect, useCallback } from 'react'

import ProductGalleryList from '../ProductGalleryList'
import { TImgSrc } from '../ProductGalleryItem/ProductGalleryItem.types'
import product1 from '../../../../../public/img/product1.png'
import product2 from '../../../../../public/img/product2.png'
import product3 from '../../../../../public/img/product3.png'

const ProductGallery: FC = () => {
  const [imagesSrc, setImagesSrc] = useState<TImgSrc[] | null>([])
  const [isViewAll, setIsViewAll] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setIsViewAll(true)
  }, [])

  useEffect(() => {
    setImagesSrc([product1, product2, product3])
  }, [])

  return (
    <div className="product__gallery gallery">
      {!!imagesSrc?.length && (
        <ProductGalleryList imagesSrc={imagesSrc} isViewAll={isViewAll} />
      )}
      {!isViewAll && (
        <button className="gallery__view-btn" onClick={handleClick}>
          View
        </button>
      )}
    </div>
  )
}

export { ProductGallery }
