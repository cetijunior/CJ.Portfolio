import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: grid;
  justify-content: flex-end;
  width: 50%;
  height: 80%;
  color: #c3c3c3;
  position: absolute;
  margin: 1.6rem;
  margin-left: -0.5rem;
  padding: 1.6rem;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;
  overflow-y: scroll;
  overflow-x: hidden;


  &::-webkit-scrollbar {
    width: 8px;
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
    width: auto;
    height: auto;
    display: flexbox;
    flex-direction: row;
    position: relative;
    margin-right: 10px;
    overflow-x: scroll;
    overflow-y: hidden;

    p:not(:first-child :second-child) {
      display: none;
    }

    p.expanded {
      display: block;
    }
  }

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
  width: auto;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:  #006633; 
  }

  @media (max-width: 650px) {
    display: flex;
    margin: 20px;
    margin-left: -1rem;
    padding: 1rem;
    padding-left: 1rem;
    flex-direction: column;
  }
`;


const Skills = () => {
  const skillsList = [
    {
      name: "JavaScript",
      experience: 85,
      details: "Core language features, asynchronous programming, ES6+",
    },
    {
      name: "React.js",
      experience: 80,
      details: "Component-based architecture, JSX syntax, state and props management",
    },
    {
      name: "HTML5",
      experience: 90,
      details: "Semantic HTML, accessibility, responsive design",
    },
    {
      name: "CSS3",
      experience: 85,
      details: "Selectors, box model, Flexbox, Grid, animations, preprocessors (Sass/SCSS)",
    },
    {
      name: "Node.js",
      experience: 75,
      details: "Server-side JavaScript, npm, Express.js, RESTful APIs",
    },
    {
      name: "Next.js",
      experience: 70,
      details: "React framework with server-side rendering, routing, API integration",
    },
    {
      name: "TypeScript",
      experience: 60,
      details: "Typed superset of JavaScript, static typing for large-scale applications",
    },
    {
      name: "Git",
      experience: 80,
      details: "Version control, branching, merging, pull requests",
    },
    {
      name: "Responsive Design",
      experience: 85,
      details: "Media queries, mobile-first design, cross-browser compatibility",
    },
    {
      name: "Webpack",
      experience: 70,
      details: "Module bundler, asset management, code splitting",
    },
    {
      name: "Testing",
      experience: 65,
      details: "Unit testing, integration testing, Jest, React Testing Library",
    },
    {
      name: "Database (MongoDB)",
      experience: 50,
      details: "Basic CRUD operations, schema design",
    },
    {
      name: "GraphQL",
      experience: 40,
      details: "Query language, Apollo Client, server-side implementation",
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
      <Container
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
                  <p>Details:</p>
                  <ol style={{ paddingLeft: 0, marginLeft: 20 }}>
                    {skill.details.split(',').map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ol>
                </div>
              )}
            </StyledSkill>
          </ContainerSlideIn>
        ))}
      </Container>
    </>
  );
};

export default Skills;