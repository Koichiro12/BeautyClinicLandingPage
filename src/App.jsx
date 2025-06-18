import { useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Aos from "aos"
import 'aos/dist/aos.css'
import Services from "./components/Services"
import About from "./components/About"
import Specialist from "./components/Specialist"
import Contact from "./components/Contact"

function App() {

  useEffect(() => {
    Aos.init({
        duration:1000
      })
  },[])

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About/>
      <Specialist />
      <Contact/>
    </>
  )
}

export default App
