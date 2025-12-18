export default function SecondSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-indigo-600 text-sm font-medium mb-3">SaaS Suite</p>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our SaaS Products
            </h1>
            <p className="text-gray-500 text-lg max-w-3xl">
              Purpose-built platforms for hospitals, enterprises and faith
              communities.
            </p>
            <p className="text-gray-500 text-lg max-w-3xl">
              YESCA is a product innovation company first, and a services
              partner second.
            </p>
          </div>
          <a
            href="#"
            className="text-indigo-700 font-medium hover:text-indigo-800 whitespace-nowrap"
          >
            View product roadmap
          </a>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Product 1 - Vaidya247 */}
        <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
          <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-gray-900">V</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vaidya247 · Duty Doctor Gig Platform
          </h3>

          <p className="text-gray-500 mb-6">
            India's first verified duty doctor marketplace helping hospitals
            fill shifts with trusted professionals, 24/7.
          </p>

          <div className="mb-6 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop"
              alt="Medical monitor display"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              For hospitals & healthcare professionals
            </p>
            <button className="bg-indigo-900 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Product 2 - ShieldX */}
        <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400 font-medium">ShieldX</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Coming Soon
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ShieldX · Cybersecurity Awareness SaaS
          </h3>

          <p className="text-gray-500 mb-6">
            Phishing simulations, awareness journeys and dashboards for
            secure-by-default enterprises.
          </p>

          <div className="mb-6 rounded-xl overflow-hidden bg-indigo-950">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop"
              alt="Cybersecurity code"
              className="w-full h-48 object-cover opacity-80"
            />
          </div>

          <a
            href="#"
            className="text-indigo-700 font-medium hover:text-indigo-800"
          >
            Explore ShieldX modules
          </a>
        </div>

        {/* Product 3 - FaithConnect */}
        <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400 font-medium">FaithConnect</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Coming Soon
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            FaithConnect · Christian Community App
          </h3>

          <p className="text-gray-500 mb-6">
            A modern space for churches and faith communities to connect, share
            and manage events.
          </p>

          <div className="mb-6 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop"
              alt="Mobile app interface"
              className="w-full h-48 object-cover"
            />
          </div>

          <a
            href="#"
            className="text-indigo-700 font-medium hover:text-indigo-800"
          >
            See FaithConnect story
          </a>
        </div>
      </div>
    </section>
  );
}
