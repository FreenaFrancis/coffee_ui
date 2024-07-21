import React,{useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Navbar from './component/Navbar'
import Home from './component/Home'
import Services from './component/Services'
import Banner from './component/Banner'
import AppBar from './component/AppBar'
import Testimonial from './component/Testimonial'
import Footer from './component/Footer'
function App() {
  useEffect(()=>{
AOS.init(
  {
    offset:100,
    duration:700,
    easing:'ease-in',
    delay:100,
  }
)
  })
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
      <AppBar/>
      <Testimonial/>
      <Footer/>
      
      {/* <About/>
      <Menu/>
      <Contact/>  */}

    </div>
  )
}

export default App