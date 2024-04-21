import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>About Me.</h2>
  </motion.div>

  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
  >
    I am an enthusiastic software developer with experience in JavaScript and expertise in frameworks like React and Node.js. A quick learner and a problem solver, I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that address real-world problems. Let's work together to bring your ideas to life!
  </motion.p>

  {/* Resume Section */}
  <motion.div variants={textVariant()} className="mt-5">
  <div style={{ display: "flex", alignItems: "center" }}>
    <img src={github} alt="redirect" width="20" height="20" style={{ marginRight: "5px" }} />
    <a href="https://drive.google.com/file/d/1Ljaug3_FvVWh8BxEriVz8gXRZgtVgkIt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>RESUME</a>
  </div>
</motion.div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
