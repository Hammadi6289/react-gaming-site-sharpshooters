import React from "react";
import Fade from "react-reveal/Fade";

const AboutUs = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${require("../images/cod1.jpg")})` }}
      ></div>
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <Fade right>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
              <p className="text-white-700 leading-relaxed">
                At Sharpshooter Arena, our mission is to create an immersive
                gaming experience for all players. We aim to provide a platform
                where gamers of all levels can come together, compete, and
                celebrate their passion for gaming.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
              <p className="text-white-700 leading-relaxed">
                Our vision is to be the ultimate destination for gaming
                enthusiasts worldwide. We strive to continually innovate,
                introduce new features, and foster a vibrant community that
                shares our love for gaming.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-white-700">
              <li>State-of-the-art gaming facilities</li>
              <li>Wide selection of games and tournaments</li>
              <li>Friendly and inclusive gaming community</li>
              <li>Regular events and competitions</li>
              <li>Professional and dedicated staff</li>
            </ul>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="bg-cover bg-center h-96"
            style={{
              backgroundImage: `url(${require("../images/aboutusjpg.jpg")})`,
            }}
          ></div>
        </Fade>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Check out our reviews!</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="review"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 text-base">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin porttitor lacinia ex, vel pulvinar arcu fringilla
                    vitae. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas."
                  </p>
                  <p className="text-gray-600 text-sm mt-4">- John Doe</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="review"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 text-base">
                    "But there will be some mourning in heaven. But if it is not
                    practical, it makes a big investment, but it is done before.
                    Let it be a great love, or an urn, the pillow of life, nor
                    wisdom." ."
                  </p>
                  <p className="text-gray-600 text-sm mt-4">- Jane Smith</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="review"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 text-base">
                    "Integer vitae ipsum ut tortor imperdiet posuere. Duis sit
                    amet sollicitudin turpis, et auctor sapien. Aliquam nec
                    dapibus ante."
                  </p>
                  <p className="text-gray-600 text-sm mt-4">
                    - Michael Johnson
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-white-700">123 Gaming Street, City, Country</p>
          <p className="text-white-700">Email: info@sharpshooter.com</p>
          <p className="text-white-700">Phone: +123 456 7890</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-white-700 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white-700 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white-700 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add other social media icons here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
