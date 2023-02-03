import React from 'react'
import MainLayout from './layout/MainLayout'
import Product from './pages/Product'

import './globalStyles/reset.css'
import './globalStyles/constats.css'
import './globalStyles/global-styles.scss'
import ThemeProvider from './providers/ThemeProvider'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <MainLayout>
          <Product />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}

export default App
