import { Cloud, Server, Code, Shield, FileText, Monitor } from "lucide-react";

export default function FourthSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Premium IT Services
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 max-w-4xl">
            IT Services, When You Need More Than Software
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Our services practice supports the products you use – from
            infrastructure to security and cloud.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cloud Migration */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Cloud className="w-6 h-6 text-indigo-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cloud Migration
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Plan, move and optimize workloads on Azure, AWS or hybrid clouds
              with minimal disruption.
            </p>
          </div>

          {/* Infra & Networking */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Infra & Networking
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Servers, storage, switching and Wi-Fi for resilient hospital and
              office networks.
            </p>
          </div>

          {/* Web & App Development */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Web & App Development
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Custom web, mobile and internal tools that extend or integrate
              with our SaaS products.
            </p>
          </div>

          {/* Cybersecurity Solutions */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-red-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cybersecurity Solutions
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Firewalls, endpoint protection and security assessments powered by
              partners like Sophos & Fortigate.
            </p>
          </div>

          {/* Licensing & Subscriptions */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Licensing & Subscriptions
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Microsoft, Adobe and other key software with verified licensing
              and support.
            </p>
          </div>

          {/* Hardware Solutions */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gray-900 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Hardware Solutions
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Desktops, laptops and workstations from Dell, HP, Lenovo and more
              – configured for your teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
