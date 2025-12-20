import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
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
import AccessibilityPanel from './components/accessibilityPanel/AccessibilityPanel';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AccessibilityProvider>
          <NavigationProvider>
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
              <AccessibilityPanel />
            </main>
          </NavigationProvider>
        </AccessibilityProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
