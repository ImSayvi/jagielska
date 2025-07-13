import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/hero"
import Services from "./components/Services/Services";
import Services2 from "./components/Services/Services2";
import Contact from "./components/Contact/contact";

const App = () => {
  return(
    <div className="overflow-x-hidden bg-white text-black">
      <Navbar />
      <Hero />
      <Contact />
      <Services />
      <Services2 />
      <Services />
    </div>
  )
}

export default App
