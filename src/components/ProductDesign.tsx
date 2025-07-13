import React from 'react';

const ProductDesign: React.FC = () => {
  const designItems = [
    {
      image: "/dist/assets/13.webp",
      title: "Paysure - Payment Platform"
    },
     {
      image: "/dist/assets/9.webp",
      title: "Paysure - Payment Platform"
    },
     {
      image: "/dist/assets/11.webp",
      title: "Paysure - Payment Platform"
    },
     {
      image: "/dst/assets/12.webp",
      title: "Paysure - Payment Platform"
    },
     {
      image: "/dist/assets/13.webp",
      title: "Paysure - Payment Platform"
    },
    {
      image: "/dist/assets/6.webp",
      title: "Pet Care E-commerce"
    },
    {
      image: "/dist/assets/4.webp",
      title: "Culinary Experience Platform"
    },
    {
      image: "/dist/assets/2.webp",
      title: "Paysure Dashboard"
    },
    {
      image: "/dist/assets/1.webp",
      title: "Landscape Architecture"
    },
    
  ];

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">UI Exploration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDesign;
