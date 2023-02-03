import React, { FC } from 'react'
import './Footer.scss'

const Footer: FC = React.memo(() => {
  return (
    <footer className="footer">
      <nav className="footer_nav">
        <div className="footer__ul">
          <div className="footer__item footer__item_active">Cart</div>
          <div className="footer__item">Overview</div>
          <div className="footer__item">Boutique</div>
          <div className="footer__item">About Us</div>
          <div className="footer__item">FAQ</div>
          <div className="footer__item footer__item_big">ITEM SECTION NAME</div>
        </div>
      </nav>
    </footer>
  )
})

export { Footer }
