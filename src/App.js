import React from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/highlight';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer'

function App() {
  return (
    <div className="App" style={{ height:"1200px",background:'cornflowerblue'}}>
          
            <Header />
          
          <Element name="featured">
            <Featured />
          </Element>
          <Element  name="venueinformation">
            <VenueInfo/>
          </Element>
          <Element name="highlights">
            <Highlight />
          </Element>
          <Element name="pricing">
            <Pricing />
          </Element>  
          <Element  name="location" >
            <Location />
          </Element>
          
            <Footer/>
          
    </div>
  );
}

export default App;
 