import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import Product from './components/Product'
import ProductsList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
        <ProductsList title="Em breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
