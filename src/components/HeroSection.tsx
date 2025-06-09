import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/7e5cb678-fcd6-447d-886b-5bd63053dbf7.png)",
        }}
      ></div>
      {/* Темный overlay для читаемости текста */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      <div className="text-center z-10 px-4">
        <h1 className="font-montserrat text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
          <span className="text-[#ea384c]">У</span>ЛИЦА
        </h1>
        <h2 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-4">
          <span className="text-[#ea384c]">К</span>ЕРЧЕНСКАЯ
        </h2>
        <div className="mt-8 w-24 h-0.5 bg-[#ea384c] mx-auto"></div>
        <p className="font-open-sans text-lg md:text-xl text-gray-300 mt-8 max-w-2xl mx-auto">
          Престижный район в самом сердце города с богатой историей и
          современной инфраструктурой
        </p>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-[#ea384c] opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-24 bg-[#ea384c] opacity-30"></div>
    </section>
  );
};

export default HeroSection;
