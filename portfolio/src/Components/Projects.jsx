import React from "react";
import Navbar from "./Navbar";
import { Component } from "react";

import image1 from "../assets/pexels-photo.jpeg"
function Projects() {
  const projects = [
    {
      title: "Weather dashboard",
      description: "A dashboard that shows you full weather, forcast for each contry.",
      tech: ["React", "Tailwind CSS"],
      liveLink: "https://capstone-project-weld-delta.vercel.app/",
      codeLink: "https://github.com/tobeanunagba/capstone-project.git",
      image: image1,
    },
   
    // Will be Adding more projects here
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-200 text-gray-800 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text animate-bounce ">
            My Projects
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A collection of projects showcasing my skills and experience in
            building dynamic, user-friendly web applications.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition duration-200"
                    >
                      View Live
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-indigo-700 transition duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition duration-200"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
