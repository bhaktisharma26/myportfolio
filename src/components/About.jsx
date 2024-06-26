import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Bhakti.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a dedicated pre-final year student pursuing a Bachelor's in
            Engineering at IET, DAVV, Indore, having an ability to quickly grasp
            complex concepts and adapt to emerging technologies. Currently
            honing skills, I am eager to contribute to impactful projects that
            drive technological advancements.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex animate-pulse  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex animate-pulse  text-gray-400 bg-neutral-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg "
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-4/5 image-container">
          <img
            className="object-cover  object-center rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-125 md:scale-200 md:brightness-125"
            alt="hero"
            src="../images/Bee.png"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
