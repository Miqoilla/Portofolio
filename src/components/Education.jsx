import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { education } from "../constants"; // Pastikan untuk menambahkan data pendidikan dalam file constants
import { post } from "../assets";

const EducationCard = ({ course, institution, image, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="flex flex-col items-center">
      <img src={image} alt={`education_by-${institution}`} className="w-16 h-16 rounded-full object-cover mb-4" />
      <p className="text-white tracking-wider text-[17px] text-center">
        <strong>{course}</strong>
      </p>
      <p className="text-secondary text-[15px]">{institution}</p>
      <ul className="mt-2 text-white text-[14px] list-disc pl-5">
        {description.map((point, index) => (
          <li key={index} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Education = () => {
  const handleDownloadCVClick = () => {
    window.open('/src/assets/cv.pdf', '_blank');
  };

  return (
    <div>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Where I have learned</p>
            <h2 className={styles.sectionHeadText}>Education.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
      <div className=" mt-6">
        <button
          onClick={handleDownloadCVClick}
          className="flex items-center gap-2 mt-4 py-2 px-4 text-white bg-primary rounded-md text-lg font-bold"
          style={{ marginLeft: "-15px" }}
        >
          <img src={post} alt="Icon" className="w-7 h-7" />
          Download my CV 😊<span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
