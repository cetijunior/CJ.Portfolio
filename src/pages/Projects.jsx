import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { projects } from "../components/data/data";

import web from "../assets/web.png";
import Github from "../assets/github.svg";

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

  @media (max-width: 650px) {
    width: auto;
    height: auto;
    display: flexbox;
    align-items: start;
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

const StyledProject = styled.div`
  color: rgb(195, 195, 195);
  margin: 1.6rem;
`;

const Social = styled.img`
  border-radius: 100%;
  width: 22px;
  height: 22px;
  margin-top: 6px;
  cursor: pointer;
  align-self: center;
`;

const Projects = () => {
  return (
    <>
      <Container
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {projects.map((exp, i) => {
          return (
            <ContainerSlideIn
              variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
              key={i}
            >
              <StyledProject>
                <h3 style={{ fontWeight: 400 }}>• {exp.name}</h3>
                <p style={{ fontWeight: 350 }}>{exp.projects}</p>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    float: "right",
                    marginTop: 6,
                  }}
                >
                  {exp.year}
                </p>
                <div
                  style={{
                    margin: 20,
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <a style={{ marginRight: 10 }} href={exp.url} target="blank">
                    <Social src={Github} alt="CJ' GitHub" />
                  </a>
                  <a href={exp.web} target="blank">
                    <Social src={web} alt="CJ's Page" />
                  </a>
                </div>
              </StyledProject>
            </ContainerSlideIn>
          );
        })}
      </Container>
    </>
  );
};

export default Projects;
