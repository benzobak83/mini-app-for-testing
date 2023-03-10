import React, { FC } from 'react'
import Button from '../../Button'
import ButtonCart from '../../ButtonCart'
import ProductSelects from '../ProductSelects'

const DescriptionsButtons: FC = () => {
  return (
    <div className="description__buttons">
      <Button className="description__btn">Personalise</Button>
      <ButtonCart />
      <ul className="description__terms terms">
        <li className="terms__item">
          *Free delivery on all orders over USD $50
        </li>
        <li className="terms__item">*Check availability in boutiques</li>
      </ul>
      <ProductSelects />
    </div>
  )
}

export { DescriptionsButtons }
