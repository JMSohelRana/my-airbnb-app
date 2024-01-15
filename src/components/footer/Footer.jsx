import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 mt-5">
      <div className="ml-3 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Explore</h3>
            <ul>
              <li>
                <a href="home">About us</a>
              </li>
              <li>
                <a href="home">Careers</a>
              </li>
              <li>
                <a href="home">Press</a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <ul>
              <li>
                <a href="home">Diversity & Belonging</a>
              </li>
              <li>
                <a href="home">Accessibility</a>
              </li>
              <li>
                <a href="home">Airbnb Associates</a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Host</h3>
            <ul>
              <li>
                <a href="home">Host your home</a>
              </li>
              <li>
                <a href="home">Host an experience</a>
              </li>
              <li>
                <a href="home">Responsible hosting</a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <a href="home">Help Center</a>
              </li>
              <li>
                <a href="home">Our COVID-19 Response</a>
              </li>
              <li>
                <a href="home">Cancellation options</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Airbnb, Inc. · Privacy · Terms ·
          Sitemap
        </div>
      </div>
    </footer>
  );
};

export default Footer;
