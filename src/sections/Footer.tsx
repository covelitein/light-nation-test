"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Subscribe Section */}
      <div className="py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-100">
            Subscribe to Our Newsletter
          </h3>
          <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-500 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-red-500">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Branches",
                "About",
                "Services",
                "Programs",
                "Offerings",
                "Login",
                "Connect with us",
              ].map((item) => {
                const key = item.toLowerCase();
                // map known section names to anchors on the home page
                const anchorMap: Record<string, string> = {
                  home: "/#home",
                  about: "/#about",
                  branches: "/#branches",
                  services: "/#services",
                  programs: "/#programs",
                  offerings: "/offering",
                };

                const href = anchorMap[key] ?? `/${key.replace(/\s+/g, "-")}`;

                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Ministries Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-red-500">
              Ministries
            </h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Become a member",
                "First Times",
                "Offerings",
                "Upcoming Programs",
                "Online Community",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-red-500">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {[
                "Streams of Life",
                "Bible Study",
                "Evangelism",
                "Drama",
                "Children Department",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-red-500">
              Media
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ism"
                  className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  ISM
                </Link>
              </li>
              <li>
                <Link
                  href="/ambience-tv"
                  className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  Ambience TV
                </Link>
              </li>
              <li>
                <Link
                  href="/free-at-last"
                  className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  Free At Last
                </Link>
              </li>
              <li>
                <Link
                  href="/watch-here"
                  className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  Watch Here
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  Watch on Youtube
                </a>
              </li>
              <li>
                <Link
                  href="/watch-ambience-tv"
                  className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  Watch on Ambience TV
                </Link>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  Watch on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white text-sm">
            ©2025 Light Nation, All Rights Reserved
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/terms"
              className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-white hover:text-red-400 transition-colors duration-200 text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
