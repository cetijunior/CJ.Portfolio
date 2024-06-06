import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: flex-end;
  height: 85%;
  color: #c3c3c3;
  position: absolute;
  margin: 1.6rem;
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
  }
`;

export const ContainerSlideIn = styled(motion.div)`
  position: relative;
`;

const StyledSkill = styled.div`
  color: rgb(195, 195, 195);
  margin: 5px;
  background-color: #1a1a1a;
  padding: 1rem;
  height: auto;
  width: auto;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  overflow: hidden;

  &:hover {
    background-color: #006633;
  }

  @media (max-width: 650px) {
    display: flex;
    margin: 5px;
    flex-direction: column;
  }
`;

const ExpandableContent = styled(motion.div)`
  overflow: hidden;
  width: auto; /* Set a fixed width for expanded content */
`;

const Skills = () => {
  const skillsList = [
    {
      name: "JavaScript",
      experience: "85",
      details: "Core language features, ReactJS, NextJS"
    },
    {
      name: "TypeScript",
      experience: "75",
      details: "Modern Website Design, Enhanced efficiency"
    },
    {
      name: "HTML",
      experience: "80",
      details: "Semantic HTML, Building the structure of web pages"
    },
    {
      name: "CSS",
      experience: "85",
      details: "Styling web pages, Responsive Design, Flexbox, Grid"
    },
    {
      name: "SQL",
      experience: "75",
      details: "Database Management, Querying, Data Manipulation"
    },
    {
      name: "Java",
      experience: "70",
      details: "Object-oriented programming, Application Development"
    },
    {
      name: "Python",
      experience: "70",
      details: "Scripting, Data Analysis, Back-End Development"
    },
    {
      name: "VS Code",
      experience: "80",
      details: "Code Editor, Debugging, Extensions for Enhanced Functionality"
    },
    {
      name: "Git",
      experience: "85",
      details: "Version Control, Collaboration, Code Hosting Platform"
    },
    {
      name: "GitHub",
      experience: "85",
      details: "Version Control, Collaboration, Code Hosting Platform"
    },
    {
      name: "NetBeans",
      experience: "75",
      details: "App Development, Desktop Developing, Debugging"
    },
    {
      name: "Photoshop",
      experience: "75",
      details: "Image Editing, Graphic Design, Digital Art Creation"
    },
    {
      name: "Lightroom CC",
      experience: "80",
      details: "Photo Editing and Organization, Color Correction, Effects"
    },
    {
      name: "Canva",
      experience: "80",
      details: "Photo Editing, Media Creation, Effects"
    },
    {
      name: "FL Studio",
      experience: "90",
      details: "Music Production, Audio Engineering, Mixing and Mastering"
    },
    {
      name: "XAMPP",
      experience: "75",
      details: "Local Database Setup, Data Management, Data Manipulation"
    },
    {
      name: "Android Studio",
      experience: "70",
      details: "App Development, Mobile Development, Debugging"
    }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const expandCollapseVariants = {
    hidden: { opacity: 0, height: 0, width: 0 },
    visible: { opacity: 1, height: 'auto', width: 300 }, // Set fixed width for visible state
  };

  // Check screen size and reset selectedSkill if less than 450px
  useEffect(() => {
    if (window.innerWidth < 450) {
      setSelectedSkill(null);
    }
  }, []);

  return (
    <>
      <Container
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {skillsList.map((skill, i) => (
          <ContainerSlideIn
            key={i}
            variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
          >
            <StyledSkill onClick={() => setSelectedSkill(selectedSkill === i ? null : i)}>
              <h3 style={{ fontWeight: 400 }}>• {skill.name}</h3>
              <p>Experience: {skill.experience}%</p>
              <AnimatePresence>
                {selectedSkill === i && (
                  <ExpandableContent
                    initial="visible"
                    animate="visible"
                    exit="hidden"
                    variants={expandCollapseVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <p>Details:</p>
                    <ol style={{ paddingLeft: 10, marginLeft: 20 }}>
                      {skill.details.split(',').map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                      ))}
                    </ol>
                  </ExpandableContent>
                )}
              </AnimatePresence>
            </StyledSkill>
          </ContainerSlideIn>
        ))}
      </Container>
    </>
  );
};

export default Skills;
