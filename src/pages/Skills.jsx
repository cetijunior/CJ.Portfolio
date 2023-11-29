import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Conteiner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 35%;
  height: 40%;
  color: #c3c3c3;
  position: absolute;
  margin-bottom: -1rem;
  padding: 1.6rem;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;

  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
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
    width: 250px;
    height: 180px;
    display: flexbox;
    flex-direction: row;
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
    overflow-x: scroll; 
  }
`;

export const ContainerSlideIn = styled(motion.div)`
    position: relative;
`;

const StyledSkill = styled.div`
  color: rgb(195, 195, 195);
  margin: 5px;
  background-color: #1a1a1a; /* Match your color theme */
  padding: 1rem;
  height: auto;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:  #006633; 
  }

  @media (max-width: 800px) {
    column-count: 2;
    display: flex;
    margin: 5px;
    padding: 1rem;
    flex-direction: column;
  }
`;


const Skills = () => {
  const skillsList = [
    {
      name: "JavaScript",
      experience: 90,
      details: "Core language features, asynchronous programming, ES6+",
    },
    {
      name: "React",
      experience: 80,
      details: "Component-based architecture, JSX syntax, state and props management",
    },
    {
      name: "HTML",
      experience: 95,
      details: "Structure and semantics of HTML elements, HTML5 features",
    },
    {
      name: "CSS",
      experience: 85,
      details: "Selectors, box model, Flexbox and Grid, responsive design",
    },
    {
      name: "Node.js",
      experience: 75,
      details: "Server-side JavaScript, npm, event-driven architecture",
    },
    {
      name: "NextJS",
      experience: 70,
      details: "React framework with server-side rendering, routing, and more",
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const floatFromRightVariants = {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Conteiner
        initial="hidden"
        animate="visible"
        variants={floatFromRightVariants}
      >
        {skillsList.map((skill, i) => (
          <ContainerSlideIn key={i} variants={floatFromRightVariants}>
            <StyledSkill onClick={() => setSelectedSkill(selectedSkill === i ? null : i)}>
              <h3 style={{ fontWeight: 400 }}>• {skill.name}</h3>
              <p>Experience: {skill.experience}%</p>
              {selectedSkill === i && (
                <div>
                  <p>{skill.details}</p>
                </div>
              )}
            </StyledSkill>
          </ContainerSlideIn>
        ))}
      </Conteiner>
    </>
  );
};

export default Skills;
