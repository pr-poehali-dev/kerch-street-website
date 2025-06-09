import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Монтажная область 1",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      description: "Современный дизайн проект с акцентом на функциональность",
    },
    {
      title: "Политех",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "Образовательное пространство нового поколения",
    },
    {
      title: "Макет 2",
      image:
        "https://cdn.poehali.dev/files/7e5cb678-fcd6-447d-886b-5bd63053dbf7.png",
      description: "Концептуальное решение для городской среды",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-black mb-6">
            С КЕМ Я РАБОТАЮ
          </h2>
          <div className="w-16 h-0.5 bg-[#ea384c] mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Портфолио реализованных проектов и успешных партнерств
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-semibold text-black mb-3 group-hover:text-[#ea384c] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
