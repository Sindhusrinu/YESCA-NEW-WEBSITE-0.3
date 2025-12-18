import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <header className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
            Y
          </div>
          <span className="font-semibold text-gray-900">
            YESCA Technologies
          </span>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-800">
            Back to Home
          </a>
          <a href="#" className="hover:text-gray-800">
            View Products
          </a>
        </div>
      </header>

      <main className="flex justify-center px-4">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-semibold text-center text-gray-900">
            Contact us
          </h1>

          <p className="text-center text-gray-500 mt-3 text-sm">
            Fill out the form below and our team will follow up within one
            business day. For urgent support, please use your product support
            channels.
          </p>

          <div className="mt-12">
            <h2 className="font-medium text-gray-900 mb-6">Send a message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Work email
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone number (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Company / Hospital
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Reason for contact
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Preferred contact method
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Your message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-xs text-gray-400 max-w-md">
                  By submitting, you agree that YESCA Technologies may contact
                  you about products, services, and updates. You can opt out at
                  any time.
                </p>

                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between px-10 py-6 text-sm text-gray-400"></footer>
    </div>
  );
}
