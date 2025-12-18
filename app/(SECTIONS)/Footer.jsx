export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
            <p className="text-gray-400">
              © YESCA Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                Status
              </a>
            </div>
          </div>

          {/* Right Side - Product and Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://www.vaidya247.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Vaidya247
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ShieldX
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              FaithConnect
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              X
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
