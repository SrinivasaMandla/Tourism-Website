import React from 'react';
import Navbar from './Navbar';
import LocationSearch from './LocationSearch.jsx';
import AllTourCards from './AllTourCards.jsx';
import Footer from './Footer.jsx';
import Subscribe from './Subscribe.jsx'
import AllTours from './AllTours.jsx';


function Tours() {
  return (
    <>
      <Navbar />
      <AllTours/>
      <LocationSearch />
      <AllTourCards/>
      <Subscribe/>
      <Footer/>
    </>
  )
}
export default Tours;