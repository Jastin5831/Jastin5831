import './App.css';
import React, {
  useEffect
} from 'react';
import Index from './components/Index.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Tutorials from './components/Tutorials.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './css/main.css?version=1.0.7';
import './css/preloader.css?version=1.0.4';
import './js/main.js';
// import './js/typer.js';


export default function App() {
  useEffect(() => {
    const handler = () => {
      const preloader = document.getElementById("preloader");
      preloader.classList.add('hidden');
    }
    setTimeout(() => {
      if (document.readyState === "complete") {
        handler();
      } else {
        window.addEventListener('load', handler);
        return () => document.removeEventListener('load', handler);
      }
    }, 2000);
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={
            <>
              <Header />
              <Index />
              <Footer />
            </>
          } />

          <Route exact path="/tutorials" element={
            <>
              <Header />
              <Tutorials />
              <Footer />
            </>
          } />

          <Route exact path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />

          <Route exact path="/skills" element={
            <>
              <Header />
              <Skills />
              <Footer />
            </>
          } />

          <Route exact path="/projects" element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>

    </>
  );
}
