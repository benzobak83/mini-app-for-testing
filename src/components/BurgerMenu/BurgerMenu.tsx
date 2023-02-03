import React, { FC, useCallback, useState } from 'react'
import { AiFillFacebook, AiFillHeart } from 'react-icons/ai'
import { BsCircleHalf } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import BtnChangeTheme from '../BtnChangeTheme'

import './BurgerMenu.scss'
import { BurgerMenuProps } from './BurgerMenu.types'

const BurgerMenu: FC<BurgerMenuProps> = ({ closeBurgerMenu }) => {
  const [closedIconIsClicked, setClosedIconIsClicked] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setClosedIconIsClicked(true)
    setTimeout(closeBurgerMenu, 200)
  }, [])

  return (
    <div
      className={`burger-menu ${
        closedIconIsClicked && 'burger-menu_closing'
      } `}>
      <div className="burger-menu__inner">
        <div className="close-menu">
          <button className="close-menu__btn" onClick={handleClick}>
            Х
          </button>
        </div>
        <ul className="burger-menu__ul">
          <li className="burger-menu__li burger-menu__li-logo">
            <a href="#" className="burger-menu__link">
              COMPANY
            </a>
          </li>
          <li className="burger-menu__li">
            <a href="#" className="burger-menu__link">
              Shop
            </a>
          </li>
          <li className="burger-menu__li">
            <a href="#" className="burger-menu__link">
              Discover
            </a>
          </li>
          <li className="burger-menu__li burger-menu__li-fb">
            <a href="#" className="burger-menu__link">
              <AiFillFacebook /> Facebook
            </a>
          </li>
          <li className="burger-menu__li burger-menu__li-inst">
            <a href="#" className="burger-menu__link">
              <FiInstagram /> instagramm
            </a>
          </li>
          <li className="burger-menu__li burger-menu__li-like">
            <a href="#" className="burger-menu__link">
              <AiFillHeart /> Like
            </a>
          </li>
          <li className="burger-menu__li burger-menu__li-theme">
            <a href="#" className="burger-menu__link">
              <BtnChangeTheme>
                <BsCircleHalf /> Change theme
              </BtnChangeTheme>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { BurgerMenu }
