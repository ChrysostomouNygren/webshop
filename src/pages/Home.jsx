import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <ProductList />
        <Footer />
    </div>
  )
}

export default Home