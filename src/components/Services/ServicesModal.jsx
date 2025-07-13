import React from "react";
import ReactDOM from "react-dom";

const ServicesModal = ({ isOpen, onClose, images }) => {
  const [zoomedImage, setZoomedImage] = React.useState(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Główny modal */}
      <div className="fixed top-0 left-0 w-full h-full z-[9998] bg-black/80 overflow-auto p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-red-400 focus:outline-none"
        >
          &times;
        </button>

        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-[90rem]">

          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="w-full h-auto cursor-pointer rounded shadow-md hover:scale-105 transition-transform"
              onClick={() => setZoomedImage(img.src)}
            />
          ))}
        </div>
      </div>

      {/* Powiększony obraz - poza modalem! */}
      {zoomedImage &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center"
            onClick={() => setZoomedImage(null)}
          >
            <img
              src={zoomedImage}
              alt="Powiększone"
              className="max-w-full max-h-full object-contain p-4"
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default ServicesModal;
