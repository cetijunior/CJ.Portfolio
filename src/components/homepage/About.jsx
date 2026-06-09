import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';

const AboutDiv = styled(motion.div)`
  max-width: 26rem;
  max-height: 30rem;
  color: #c3c3c3;
  position: absolute;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1.6rem;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;
  overflow-y: auto;

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
    line-height: 1.6;
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
`;

const ContainerSlideIn = styled(motion.div)`
  width: 100%;
  position: relative;
  margin-right: 50px;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: #006633;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  margin: 3px 3px 3px 0;
`;

const About = () => {
  const techStack = [
    "JavaScript", "TypeScript", "React", "NextJS",
    "Swift", "Java", "Python", "Node.js",
    "HTML", "CSS", "Firebase", "MongoDB", "SQL"
  ];

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
            Hey! I'm CJ — a self-taught developer based in Albania, passionate about building real things for the web and mobile.
          </p>
          <p>
            I work across the full stack: from polished front-ends in React & NextJS, to back-end services with Node and databases, to native iOS apps in Swift. I pick the right tool for the job.
          </p>
          <p>
            With a background in Electronics Engineering & Computer Science, I blend analytical thinking with creative problem-solving to build products that are fast, clean, and actually useful.
          </p>
          <div style={{ marginBottom: "1rem" }}>
            {techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          <p>
            Currently building: iOS apps, TypeScript projects, and open-sourcing everything I can. Always learning, always shipping.
          </p>
          <h3 style={{ color: "#006633" }}>
            Open to remote opportunities and collaborations. Let's build something great.
          </h3>
        </div>
      </ContainerSlideIn>
    </AboutDiv>
  );
};

export default About;
