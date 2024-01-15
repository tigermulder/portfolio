import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Archive from './components/archiving/Archive';
import Skills from './components/skills/Skills';
import Chronology from './components/chronology/Chronology';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import TopButton from './components/topButton/topButton';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Archive/>
        <Skills/>
        <Chronology/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <TopButton />
      </main>
    </>
  );
}

export default App;
