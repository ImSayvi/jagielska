import React from "react";

// Przykładowe dane (dodaj swoje prawdziwe!)
const PricingData = [
  {
    name: "Sesja plenerowa",
    price: "150 zł",
    description: ["do wybrania 5 ujęć", "obróbka graficzna", "zdjęcia w formie cyfrowej"],
    duration: "ok. 30 minut",
    buttonLink: "#portfolio",       // dodajesz link
    buttonText: "Zobacz przykłady", // dowolny tekst
  },
  {
    name: "Fotoreportaż",
    price: "250 zł",
    description: ["15 ujęć", "obróbka graficzna", "galeria online"],
    duration: "ok. 1 godzina",
    buttonLink: "#reportage", // inna sekcja
    buttonText: "Przykładowy reportaż",
  },
  {
    name: "Sesja okolicznościowa",
    price: "400 zł",
    description: ["30 ujęć", "obróbka", "pendrive z albumem"],
    duration: "ok. 1,5 godziny",
    buttonLink: "#gallery",
    buttonText: "Zobacz zdjęcia z zawodów",
  },
  {
    name: "Fotoreportaż z zawodów",
    price: "10 zł / zdjęcie",
    description: ["wybierasz interesujące Cię ujęcia", "profesjonalna obróbka", "dostęp do dysku przez tydzień"],
    duration: "zdjęcia z przejazdu",
    buttonLink: "#gallery",
    buttonText: "Zobacz zdjęcia z zawodów",
  },
  {
    name: "Dojazd",
    price: "100 zł / km",
    description: ["w obrębie Twojej starej dojazd gratis", "cena dojazdu nie dotyczy fotoreportażów z zawodów", "dostęp do dysku przez tydzień"],
    //duration: "zdjęcia z przejazdu",
  },
];


const Pricing = () => {
  return (
    <div id="prices" className="my-14 py-12 scroll-mt-[100px]">
      <div className="container">
        <h1 className="text-3xl font-bold text-primary sm:text-5xl text-center mb-10">Cennik</h1>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {PricingData.map((data, index) => (
            <div key={index} className="hover:bg-primary/20 border p-6 rounded-xl shadow-md bg-slate-100 text-center space-y-4">
              <h2 className="text-2xl font-semibold text-black">{data.name}</h2>
              <p className="text-3xl font-bold text-primary">{data.price}</p>
              <ul className="text-gray-700 text-sm space-y-1">
                {data.description.map((desc, i) => (
                  <li key={i}>• {desc}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 pb-3">{data.duration}</p>
                {data.buttonLink && data.buttonText && (
                    <a href={data.buttonLink}>
                        <button className="primary-btn">{data.buttonText}</button>
                    </a>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
