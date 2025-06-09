import React from "react";
import Icon from "@/components/ui/icon";

const DistrictInfo = () => {
  const features = [
    {
      icon: "MapPin",
      title: "Центральное расположение",
      description:
        "Удобная транспортная доступность и близость к деловому центру",
    },
    {
      icon: "Building2",
      title: "Развитая инфраструктура",
      description:
        "Магазины, рестораны, медицинские центры в шаговой доступности",
    },
    {
      icon: "TreePine",
      title: "Зеленые зоны",
      description: "Парки и скверы для комфортного отдыха и прогулок",
    },
    {
      icon: "GraduationCap",
      title: "Образование",
      description: "Школы и детские сады высокого уровня в районе",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-black mb-6">
            О РАЙОНЕ
          </h2>
          <div className="w-16 h-0.5 bg-[#ea384c] mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Улица Керченская — это место, где история встречается с
            современностью. Район сочетает в себе классическую архитектуру и
            новые жилые комплексы, создавая уникальную атмосферу городской
            жизни.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-black group-hover:bg-[#ea384c] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Icon name={feature.icon} size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-black mb-3">
                {feature.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictInfo;
