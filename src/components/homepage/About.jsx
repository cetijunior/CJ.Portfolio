import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';
import { ContainerSlideIn } from '../../pages/Projects';

const AboutDiv = styled(motion.div)`
  max-width: 24rem; 
  max-height: 27rem;
  color: #c3c3c3;
  position: absolute;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1.6rem;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;

  
  &::-webkit-scrollbar {
    width: 8px;
    height: 4px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #006633;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1a1a1a; 
  }

  p {
    padding-bottom: 1rem;
  }

  @media (max-width: 650px) {
    width: 280px;
    height: 50%;
    position: relative;
    margin-left: -1.6rem;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    overflow-y: scroll; 
    overflow-x: hidden;
  }
}
`;
const About = () => {
  return (
    <AboutDiv
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <ContainerSlideIn variants={fadeIn("left", "tween", 0.2, 0.6)}>
      <div>
    <p>
      Hey there! I'm CJ, a self-taught Front-end Jr. Developer, passionate about web development and remote work.
    </p>
    <p>
      Primary Techs: Javascript, ReactJs, CSS, Styled Components, SASS, HTML. Currently studying Typescript and Node.
    </p>
    <p>
      With a background in Electronics engineering and Computer Science, I bring a unique blend of technical know-how and creativity.
    </p>
    <p>
      My goal is simple: to learn, grow, and be a valuable team player. I'm here to support and collaborate with my experienced colleagues and create outstanding web experiences that leave a lasting impact.
    </p>
    <h3>
      If you're in search of a curious and dedicated team member eager to contribute and learn, count me in! 🙋‍♂️
    </h3>
  </div>   
      </ContainerSlideIn>
    </AboutDiv>
  );
};

export default About;
