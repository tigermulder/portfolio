import React, { memo } from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = memo(() => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social/>
          <div className="home_img"></div>
          <Data/>
        </div>
        <ScrollDown/>
      </div>
    </section>
  )
});

Home.displayName = 'Home';

export default Home
