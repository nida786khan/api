import React from 'react';

interface DataProps {
  info: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const Data: React.FC<DataProps> = ({ info }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-start gap-6">
            <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="h-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="relative group">
                  <img
                    className="lg:h-64 md:h-48 w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                    src={info.image}
                    alt={info.name}
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-2xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-all duration-300">{info.name}</h1>
                  <p className="leading-relaxed text-lg mb-3">Price: <span className="font-semibold text-blue-600">${info.price}</span></p>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Data;

  





