import React from "react";
import Navbar from "./Navbar";
import { FaTwitch, FaGithub, FaInstagramSquare } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full bg-slate-200 min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
            {/* Text Content */}
            <div className="p-7 max-w-lg text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-6 ">
                Hi, I'm Tobechukwu Iyke-anunagba
              </h1>
             <p className="text-gray-600 leading-relaxed mb-6">
 a dedicated front-end developer with a strong foundation in computer science. I specialize in building modern, responsive, and user-centric web applications that bring visions to reality. My journey has been defined by determination and growth, especially during my time in the ALX Frontend Program, where I gained expertise in JavaScript, React, and contemporary web development techniques. Overcoming the program’s challenges taught me the importance of persistence and lifelong learning.
</p>
<p className="text-gray-600 leading-relaxed mb-6">
  Outside of coding, I enjoy diving into my other passions—gaming, football, and savoring delicious meals. These activities keep me grounded, energized, and ready to tackle complex coding tasks with a fresh perspective. I’m constantly seeking opportunities to explore emerging technologies and redefine what’s achievable in the world of web development.
</p>

              <div className="flex justify-center md:justify-start space-x-4">
                {/* Social Media Icons */}
                <a
                  href="https://twitch.com/tobeanunagba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg text-white hover:shadow-xl transition duration-300 hover:animate-pulse"
                >
                  <FaTwitch size={30} />
                </a>
                <a
                  href="https://github.com/tobeanunagba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full shadow-lg text-white hover:shadow-xl transition duration-300 hover:animate-pulse"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.instagram.com/toberichmond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg text-white hover:shadow-xl transition duration-300 hover:animate-pulse"
                >
                  <FaInstagramSquare size={30} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center items-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl animate-pulse">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
