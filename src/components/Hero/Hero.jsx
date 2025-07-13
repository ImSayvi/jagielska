import React from "react"
import BannerImg from "../../assets/hero.jpg"

const BigStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
};

const Hero = () => {
  return(
    <div style={BigStyle} className="bg-white mt-[100px]">
      <div >{/*  className="bg-black/20" */}
        <div className="container min-h-[800px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center text-white space-y-5">
            <p className="text-primary text-2xl">Rucham Ci matkę</p>
            <h1 className="text-5xl md:text-7xl">KLAUDIA JAGIELSKA</h1>
            <p>Zatrzymaj chwilę. Opowiedz swoją historię kadrem.</p>
            <button className="primary-btn">Umów sesję</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
