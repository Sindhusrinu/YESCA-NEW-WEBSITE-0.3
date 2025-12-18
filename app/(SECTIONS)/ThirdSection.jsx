export default function ThirdSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* Decorative curved background elements */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Flagship Product
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Vaidya247 for Hospitals
              </h1>
              <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                Simple pricing that scales with your duty rosters – designed for
                hospitals of
                <br />
                every size.
              </p>
            </div>
            <a
              href="#"
              className="text-indigo-700 font-semibold hover:text-indigo-800 whitespace-nowrap mt-2"
            >
              View full pricing & FAQ
            </a>
          </div>
        </div>

        {/* Full Width Card */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Pricing */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8">
                Hospital Starter
              </h3>

              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl font-bold text-indigo-700">
                    ₹24,999
                  </span>
                </div>
                <p className="text-gray-400 text-base">per hospital / month</p>
              </div>

              <ul className="space-y-5 mb-10">
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                  <span>Up to 50 active duty doctors</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                  <span>Duty roster management & shift calendar</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                  <span>Verified doctor onboarding workflow</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                  <span>Basic payouts & settlement dashboard</span>
                </li>
                <li className="flex items-start text-gray-600 leading-relaxed">
                  <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                  <span>Email & WhatsApp support</span>
                </li>
              </ul>

              <button className="bg-indigo-900 text-white px-10 py-4 rounded-full font-medium hover:bg-indigo-800 transition-colors text-base mb-8">
                Request a demo
              </button>

              <p className="text-gray-400 text-sm leading-relaxed">
                Custom pricing available for multi-location hospital groups and
                health systems.
              </p>
            </div>

            {/* Right Column - FAQ */}
            <div className="space-y-10 pt-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  How quickly can we go live with Vaidya247?
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Most hospitals go live within 2–4 weeks, including data setup,
                  onboarding and basic staff training.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  Is Vaidya247 secure and compliant?
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  The platform is built with strict access controls, encrypted
                  data flows and healthcare-focused security practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  Can doctors use a mobile app?
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Yes. Duty doctors can browse shifts, manage availability and
                  track payouts from a dedicated mobile experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
