export default function SeventhSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Card */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-[4rem] p-12 md:p-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to launch your next product or secure your infrastructure?
              </h2>
              <p className="text-indigo-200 text-lg leading-relaxed mb-8">
                Whether you're a hospital, enterprise or community, our team can
                help you design, build and scale with confidence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-lg">
                  Schedule a product demo
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-base transition-colors">
                  Talk to our founders
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:max-w-md">
              <p className="text-indigo-200 text-base leading-relaxed">
                We respond to most enquiries within one business day and can
                align with your compliance and procurement processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
