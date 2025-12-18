export default function SixthSection() {
  const testimonials = [
    {
      quote:
        "Vaidya247 has completely changed how we manage duty rosters. Last-minute gaps are now rare, and payouts are transparent for everyone.",
      name: "Medical Director",
      organization: "Multi-specialty hospital, South India",
      category: "Healthcare",
    },
    {
      quote:
        "The YESCA team understands both infrastructure and product. Our migration and application rollout felt like one integrated project.",
      name: "Head of IT",
      organization: "Corporate healthcare group",
      category: "IT & Cloud",
    },
    {
      quote:
        "ShieldX pilots are already helping our staff recognise phishing attempts. We're excited to roll it out across locations.",
      name: "CIO",
      organization: "Enterprise customer",
      category: "Cybersecurity",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Customer Stories
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            Real results from hospitals, admins and IT leaders who partner with
            YESCA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-900 text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>

              <div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-gray-500 font-medium text-sm mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.organization}
                    </p>
                  </div>
                  <span className="text-indigo-700 font-semibold text-sm whitespace-nowrap">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
