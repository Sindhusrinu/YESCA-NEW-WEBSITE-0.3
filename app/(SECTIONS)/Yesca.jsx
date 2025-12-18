import React from "react";
import {
  ArrowRight,
  Database,
  Activity,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function Yesca() {
  const features = [
    {
      title: "Intelligence on setup",
      description:
        "Streamlines the connection between existing data sources and the platform, leveraging current data.",
      icon: <Database className="w-8 h-8" />,
      span: "md:col-span-8",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      title: "Built to scale with Big data",
      description:
        "Designed for handling large volumes of data while maintaining performance and reliability.",
      icon: <Activity className="w-8 h-8" />,
      span: "md:col-span-4",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Quality control in real-time",
      description:
        "Ensures data accuracy and consistency through continuous monitoring.",
      icon: <ShieldCheck className="w-8 h-8" />,
      span: "md:col-span-4",
      iconBg: "bg-pink-100 text-pink-600",
    },
    {
      title: "Focus on what matters",
      description:
        "Allows users to concentrate on core business objectives by automating routine tasks.",
      icon: <Target className="w-8 h-8" />,
      span: "md:col-span-8",
      iconBg: "bg-indigo-100 text-indigo-600",
      isHighlighted: true, // Optional: marks this card for special styling if needed
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-24 px-6 md:px-12 font-sans">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
          
          .font-roboto-condensed {
            font-family: 'Roboto Condensed', sans-serif;
          }
        `}
      </style>
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide mb-6">
            Intelligence-led design
          </span>
          <h2 className="text-5xl md:text-7xl robotoCondensed font-black italic leading-none text-gray-900 mb-6">
            Why YESCA
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            We combine years of IT infrastructure experience with modern product
            thinking to build platforms that are secure, reliable and delightful
            to use.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${feature.span}`}
            >
              {/* Card Content */}
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-roboto-condensed font-black italic uppercase text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-500 font-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="relative z-10 mt-8 flex items-center justify-between">
                <span className="text-sm font-bold tracking-wider uppercase text-gray-300 group-hover:text-gray-400 transition-colors">
                  0{index + 1}
                </span>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
