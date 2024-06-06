import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { projects } from "../components/data/data";
import web from "../assets/web.png";
import Github from "../assets/github.svg";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
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

  @media (max-width: 650px) {
    width: auto;
    height: auto;
    display: flex;
    align-items: start;
    flex-direction: column;
    position: relative;
    margin-right: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const ContainerSlideIn = styled(motion.div)`
  width: 60%;
  position: relative;
  margin-right: 50px;
`;

const StyledProject = styled.div`
  color: rgb(195, 195, 195);
  margin: 1.6rem 0;
  background-color: #1a1a1a;
  padding: 1rem;
  height: auto;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  overflow: hidden;

  &:hover {
    background-color: #145214;
  }

  @media (max-width: 650px) {
    display: flex;
    margin: 5px 0;
    flex-direction: column;
  }
`;

const Social = styled.img`
  border-radius: 100%;
  width: 22px;
  height: 22px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: #006633;
    border-radius: 10px;
  }
`;

const ExpandableContent = styled(motion.div)`
  overflow: hidden;
  width: 100%;
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const expandCollapseVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <Container
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {projects.map((project, i) => (
        <ContainerSlideIn
          key={i}
          variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
        >
          <StyledProject onClick={() => setSelectedProject(selectedProject === i ? null : i)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  padding: 4,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700 }}>{project.year}</span>
                <a style={{ marginLeft: 10 }} href={project.url} target="_blank" rel="noopener noreferrer">
                  <Social src={Github} alt="CJ's GitHub" />
                </a>
                <a href={project.web} target="_blank" rel="noopener noreferrer">
                  <Social src={web} alt="CJ's Page" />
                </a>
              </div>
              <div>
                <h3 style={{ fontSize: "22px", fontWeight: 400, marginBottom: 4 }}>• {project.name}</h3>
                <p style={{ fontWeight: 350 }}>{project.projects}</p>
              </div>
            </div>
            <AnimatePresence>
              {selectedProject === i && (
                <ExpandableContent
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={expandCollapseVariants}
                  transition={{ duration: 0.5 }}
                >
                  <p>{project.description}</p>
                </ExpandableContent>
              )}
            </AnimatePresence>
          </StyledProject>
        </ContainerSlideIn>
      ))}
    </Container>
  );
};

export default Projects;