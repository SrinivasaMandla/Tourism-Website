import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero.jsx'
import LocationSearch from './LocationSearch.jsx'
import BestServices from './BestServices.jsx'
import FeaturedTours from './FeaturedTours.jsx'
import ExperienceServe from './ExperienceServe.jsx'
import VisitGallery from './VisitGallery.jsx'
import ClientsAbout from './ClientsAbout.jsx'
import Subscribe from './Subscribe.jsx'
import Footer from './Footer.jsx'

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero/>
        <LocationSearch />
        <BestServices/>
        <FeaturedTours/>
        <ExperienceServe/>
        <VisitGallery/>
        <ClientsAbout/>
        <Subscribe/>
        <Footer/>
      </>
    )
  }
  
}
export default Home;
