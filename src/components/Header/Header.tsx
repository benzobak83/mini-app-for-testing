import React, { FC, useCallback, useState } from 'react'
import { AiFillFacebook, AiFillHeart, AiOutlineMenu } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { BsCircleHalf } from 'react-icons/bs'
import './Header.scss'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

import SearchHeader from '../SearchInput/SearchHeader'
import BtnChangeTheme from '../BtnChangeTheme'
import { useCartContext } from '../../contexts/CartContext'

const Header: FC = () => {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState<boolean>(false)

  const openBurgerMenu = useCallback(() => {
    setIsBurgerMenuActive(true)
  }, [])
  const closeBurgerMenu = useCallback(() => {
    setIsBurgerMenuActive(false)
  }, [])

  const { countCartItems } = useCartContext()

  return (
    <header className="header">
      <div className="header__inner">
        <ul className="header__ul">
          <li className="header__item header__item-left">
            <a href="#" className="header__link">
              Shop
            </a>{' '}
          </li>
          <li className="header__item header__item-left">
            <a href="#" className="header__link">
              Discover
            </a>
          </li>
          <li className="header__item header__item-logo">
            <a href="#" className="header__link">
              COMPANY
            </a>
          </li>
          <li className="header__item header__item-search">
            <SearchHeader />
          </li>
          <li className="header__item header__item-cart">
            <a href="#" className="header__link">
              <span className="header__item-cart-name">Cart</span>
              {countCartItems && (
                <span className="header__item-cart-count">
                  {countCartItems}
                </span>
              )}
            </a>
          </li>
          <li className="header__item header__item-social">
            <a href="#" className="header__link">
              <AiFillFacebook className="header__item-social-img" />
            </a>
          </li>
          <li className="header__item header__item-social">
            <a href="#" className="header__link">
              <FiInstagram className="header__item-social-img" />
            </a>
          </li>
          <li className="header__item header__item-social">
            <a href="#" className="header__link">
              <AiFillHeart className="header__item-social-img" />
            </a>
          </li>

          <li className="header__item header__item-social">
            <BtnChangeTheme>
              <BsCircleHalf className="header__item-social-img" />
            </BtnChangeTheme>
          </li>
          <li className="header__item header__item-burger ">
            <button className="controller-burger-menu" onClick={openBurgerMenu}>
              <AiOutlineMenu />
            </button>
          </li>
        </ul>
      </div>
      {isBurgerMenuActive && <BurgerMenu closeBurgerMenu={closeBurgerMenu} />}
    </header>
  )
}

export { Header }
