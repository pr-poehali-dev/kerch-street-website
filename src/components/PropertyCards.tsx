import React from "react";
import Icon from "@/components/ui/icon";

const PropertyCards = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      title: "Элитный жилой комплекс",
      price: "от 12 млн ₽",
      area: "85-150 м²",
      rooms: "2-4 комнаты",
      features: ["Панорамные окна", "Подземный паркинг", "Консьерж-сервис"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      title: "Современные апартаменты",
      price: "от 8 млн ₽",
      area: "45-95 м²",
      rooms: "1-3 комнаты",
      features: ["Готовая отделка", "Фитнес-центр", "Детская площадка"],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&h=300&fit=crop",
      title: "Премиум пентхаусы",
      price: "от 25 млн ₽",
      area: "120-200 м²",
      rooms: "3-5 комнат",
      features: ["Собственная терраса", "Умный дом", "VIP-зона"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-black mb-6">
            НЕДВИЖИМОСТЬ
          </h2>
          <div className="w-16 h-0.5 bg-[#ea384c] mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Эксклюзивные предложения жилой недвижимости на улице Керченская
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#ea384c] text-white px-3 py-1 rounded-full font-montserrat font-semibold text-sm">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold text-black mb-3">
                  {property.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Icon name="Home" size={16} />
                    <span className="font-open-sans text-sm">
                      {property.area}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Bed" size={16} />
                    <span className="font-open-sans text-sm">
                      {property.rooms}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {property.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <Icon name="Check" size={14} className="text-[#ea384c]" />
                      <span className="font-open-sans text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-black hover:bg-[#ea384c] text-white py-3 rounded-lg font-montserrat font-semibold transition-colors duration-300">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCards;
