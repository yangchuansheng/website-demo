import React from 'react';

const Solutions = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-20">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored for your industry
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Financial Services",
              image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
              description: "Optimize portfolio performance and risk management with AI-driven insights."
            },
            {
              title: "Healthcare",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
              description: "Improve patient outcomes with predictive analytics and data-driven care."
            },
            {
              title: "E-commerce",
              image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
              description: "Boost sales and customer satisfaction with personalized recommendations."
            }
          ].map((solution, index) => (
            <div key={index} className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {solution.title}
              </h3>
              <p className="text-base text-gray-500">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;