import React from 'react';
import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Promo from '../Promo/Promo';
// import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        {/*<Portfolio />*/}
      </main>
      <Footer />
    </>
  );
}

export default Main;
