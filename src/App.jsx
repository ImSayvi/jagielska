import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services";
import Services2 from "./components/Services/Services2";
import Contact from "./components/Contact/contact";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonial/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return(
    <div className="overflow-x-hidden bg-white text-black">
      <Navbar />
      <Hero />
      <Contact />
      <Services />
      <Services2 />
      <Services />
      <Pricing />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default App
