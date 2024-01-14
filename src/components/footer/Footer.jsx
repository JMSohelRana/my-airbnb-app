import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-2 mt-6">
      <div className="">
        <div className="">
          <div className="">
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
          <div className="">
            <h3 className="">Community</h3>
            <ul>
              <li>
                <a href="home">Diversity & Belonging</a>
              </li>
              <li>
                <a href="/">Accessibility</a>
              </li>
              <li>
                <a href="home">Airbnb Associates</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
