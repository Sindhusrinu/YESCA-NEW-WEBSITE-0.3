import React from "react";
import { Truck, ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export default function WhyYesca() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "VAIDYA 247",
      description:
        "Continuous 24/7 monitoring and operational support infrastructure designed for enterprise-grade reliability.",
      span: "md:col-span-8 bg-zinc-50", // Big Card
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "BASIC",
      description: "Essential foundational tools.",
      span: "md:col-span-4 bg-zinc-50", // Small Card
      iconBg: "bg-green-100 text-green-700",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "PHISH-N-MITIGATE",
      description:
        "Advanced security protocols to detect threats and mitigate risks instantly with AI-driven analysis.",
      span: "md:col-span-12 bg-[#000783] text-white", // Normal/Full Card (Highlighted)
      iconBg: "bg-white/10 text-white",
      isDark: true,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-custom-gradient">
      {/* Font Import and Custom Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
          
          .font-roboto-condensed {
            font-family: 'Roboto Condensed', sans-serif;
          }
          
          .bg-custom-gradient {
            background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(187, 220, 252, 1) 50%, rgba(117, 167, 218, 1) 100%);
          }

         
        `}
      </style>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000783] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000783]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-600 font-sans">
              Premium Standard
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl robotoCondensed font-black italic leading-none text-gray-900 mb-6">
            WHY CHOOSE <span className="text-[#000783]">YESCA?</span>
          </h2>

          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            We redefine the experience with premium quality, absolute privacy,
            and a commitment to excellence that you can trust every single time.
          </p>
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`group relative p-8 rounded-[2rem] border border-white/50 backdrop-blur-sm flex flex-col justify-between overflow-hidden animate-shadow-pulse ${feature.span}`}
            >
              {/* Card Content */}
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>

                <h3
                  className={`text-3xl font-roboto-condensed font-black italic uppercase mb-3 ${
                    feature.isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-lg font-sans leading-relaxed max-w-xl ${
                    feature.isDark ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="relative z-10 mt-8 flex items-center justify-between">
                <span
                  className={`text-sm font-bold tracking-wider uppercase ${
                    feature.isDark ? "text-white/80" : "text-gray-400"
                  }`}
                >
                  0{index + 1}
                </span>
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    feature.isDark
                      ? "bg-white text-[#000783] hover:bg-gray-100"
                      : "bg-white border border-gray-200 text-gray-900 hover:bg-[#000783] hover:text-white hover:border-[#000783]"
                  }`}
                >
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </button>
              </div>

              {/* Decorative Gradient for Dark Card */}
              {feature.isDark && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
