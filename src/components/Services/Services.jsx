// components/Services.jsx
import React, { useState } from "react";
import BannerImg from "../../assets/about.jpg";
import { LiaCameraRetroSolid } from "react-icons/lia";
import ServicesModal from "./ServicesModal";

const images = import.meta.glob('../../assets/services/*.jpg', { eager: true });

const galleryImages = Object.entries(images).map(([path, module], index) => ({
  id: index + 1,
  src: module.default,
  alt: `Zdjęcie ${index + 1}`,
}));


const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="services" className="py-16 bg-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* image section */}
          <div>
            <img
              src={BannerImg}
              alt="konik hehe"
              className="sm:scale-105 max-h-[400px] drop-shadow-md mx-auto mr-7"
            />
          </div>
          {/* text section */}
          <div className="space-y-4">
            {/* heading section */}
            <div className="flex items-center gap-4">
              <div className="text-primary text-7xl">
                <h1 className="font-bold text-8xl">
                  <LiaCameraRetroSolid />
                </h1>
              </div>
              <div>
                <p className="text-primary">Sesje przedstawiające</p>
                <h1 className="text-2xl sm:text-4xl font-bold">Zwierzęta</h1>
              </div>
            </div>
            {/* bottom section */}
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                officia beatae. Quaerat nobis quis maxime a consectetur
                asperiores optio repellendus? <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, reprehenderit.
              </p>
            </div>
            <button className="outline-btn" onClick={() => setIsModalOpen(true)}>
              Zobacz inne zdjęcia
            </button>
          </div>
        </div>
      </div>

      {/* Modal z galerią */}
      <ServicesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={galleryImages}
      />
    </div>
  );
};

export default Services;
