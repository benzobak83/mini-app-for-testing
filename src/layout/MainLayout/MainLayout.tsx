import React, { FC } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CartContextProvider from '../../providers/CartContextProvider'
import { MainLayoutProps } from './MainLayout.types'

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-wrapper">
      <CartContextProvider>
        <Header />
        {children}
      </CartContextProvider>
      <Footer />
    </div>
  )
}

export { MainLayout }
