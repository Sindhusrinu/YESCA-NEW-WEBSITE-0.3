export default function FirstSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-purple-600 text-sm font-medium mb-3">
          Product + Innovation
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why YESCA
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          We combine years of IT infrastructure experience with modern product
          thinking to build platforms that are secure, reliable and delightful
          to use.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Intelligence-led design
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We design from real workflows – doctors, admins, security teams – so
            every feature maps to everyday reality.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Enterprise-ready from day one
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Role-based access, audit trails, encryption and observability are
            built into the core of each product.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Scalable cloud architecture
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Cloud-native, horizontally scalable setups designed to grow with
            your users without performance trade-offs.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            User-first UI/UX
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Clean interfaces, minimal clicks and mobile-ready experiences
            inspired by the best modern SaaS products.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Secure by default
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Security controls, patching, backups and incident playbooks are
            standard – not add-ons.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Built by a certified team
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Engineers certified across cloud, security and product frameworks,
            working as one integrated squad.
          </p>
        </div>
      </div>
    </section>
  );
}
