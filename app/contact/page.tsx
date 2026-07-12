import React from 'react'
import Header from '../components/Layout/Header'
import Information from '../components/Contact/Information'
import FAQ from '../components/Contact/FAQ'
import Footer from '../components/Layout/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <Information />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
