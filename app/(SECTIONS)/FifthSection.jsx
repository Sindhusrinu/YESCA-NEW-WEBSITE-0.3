export default function FifthSection() {
  const clients = [
    "Multi-specialty Hospitals",
    "Diagnostics Chains",
    "Corporate Offices",
    "MSME IT Teams",
    "Startups",
    "Govt. Projects",
  ];

  const partners = [
    "Microsoft",
    "Google Cloud",
    "Dell",
    "HP",
    "Cisco",
    "Sophos",
    "Fortigate",
    "NetApp",
    "Adobe",
    "Veeam",
    "Trend Micro",
    "And more",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Trusted Ecosystem
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Clients & Technology Partners
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            From hospitals to enterprises, we collaborate with brands that
            demand reliability.
          </p>
        </div>

        {/* Clients & Partners Grid */}
        <div className="space-y-4">
          {/* First Row - Clients */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-6 py-5 shadow-sm text-center"
              >
                <span className="text-gray-500 font-medium text-sm">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Second Row - Partners (First 6) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.slice(0, 6).map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-6 py-5 shadow-sm text-center"
              >
                <span className="text-gray-500 font-medium text-sm">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          {/* Third Row - Partners (Last 6) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.slice(6, 12).map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-6 py-5 shadow-sm text-center"
              >
                <span className="text-gray-500 font-medium text-sm">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
