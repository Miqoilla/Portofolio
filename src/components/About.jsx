import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { linkedin } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[230px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/muhammad-daffa-miqoilla-2b17aa282/', '_blank');
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a highly motivated student studying at Universitas Amikom Yogyakarta, majoring in Informatics Engineering, with the hope of creating software that will one day impact people's lives. 
        My interest in programming began when I began exploring the endless possibilities of writing code, which then led me to pursue an education in Informatics Engineering.
        I continue to develop my current skills, focusing on achieving and deepening my understanding in various aspects of programming and technology. 
        I am committed to continuing to learn and innovate, with the belief that the software I create in the future will have a positive impact on society.

        <button
          onClick={handleConnectClick}
          className="flex items-center gap-2 mt-4 py-2 px-4 text-white bg-primary rounded-md text-lg font-bold"
          style={{ marginLeft: '-15px' }}
          >
          <img src={linkedin} alt="Icon" className="w-8 h-8" />
          Connect with me on LinkedIn! <span>&rarr;</span>
        </button>

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
