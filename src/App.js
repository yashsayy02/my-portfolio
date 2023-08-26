import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Tech from './components/tech'
import Works from './components/works'
import Contacts from './components/contact'
import StarsCanvas  from './components/canvas/Stars'


function App() {
  return(
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
		    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
			    <Navbar />
          <Hero />
		    </div>
        <About />
        <Tech />
        <Works />
      </div>
      <div className='relative z-0'>
        <Contacts />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App;
