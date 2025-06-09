import React from "react";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
              СВЯЖИТЕСЬ <span className="text-[#ea384c]">С НАМИ</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#ea384c] mb-8"></div>

            <p className="font-open-sans text-lg text-gray-300 mb-8 leading-relaxed">
              Получите персональную консультацию по недвижимости на улице
              Керченская. Наши эксперты помогут найти идеальный вариант для вас.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ea384c] rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-semibold">Телефон</p>
                  <p className="font-open-sans text-gray-300">
                    +7 (495) 123-45-67
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ea384c] rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-semibold">Email</p>
                  <p className="font-open-sans text-gray-300">
                    info@kerchenskaya.ru
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ea384c] rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-semibold">Адрес</p>
                  <p className="font-open-sans text-gray-300">
                    ул. Керченская, 1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="font-montserrat text-2xl font-bold mb-6">
              Оставить заявку
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#ea384c] focus:outline-none transition-colors duration-300"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#ea384c] focus:outline-none transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#ea384c] focus:outline-none transition-colors duration-300"
              />
              <textarea
                placeholder="Ваше сообщение"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#ea384c] focus:outline-none transition-colors duration-300"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#ea384c] hover:bg-red-600 text-white py-3 rounded-lg font-montserrat font-semibold transition-colors duration-300"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
