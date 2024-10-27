import React from 'react';
import { BarChart3, Brain, Globe2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms that analyze your data in real-time, providing actionable insights.',
      icon: Brain,
    },
    {
      name: 'Real-time Visualization',
      description: 'Interactive dashboards and reports that bring your data to life with stunning visualizations.',
      icon: BarChart3,
    },
    {
      name: 'Global Scale',
      description: 'Enterprise-grade infrastructure that scales with your business, anywhere in the world.',
      icon: Globe2,
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to analyze your data
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform combines powerful analytics with intuitive design to help you make better decisions.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;