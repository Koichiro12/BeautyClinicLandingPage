import { useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Aos from "aos"
import 'aos/dist/aos.css'
import Services from "./components/Services"
import About from "./components/About"

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
    </>
  )
}

export default App
