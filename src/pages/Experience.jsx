import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { experienceData } from "../components/data/data";

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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-right: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const EntryWrapper = styled(motion.div)`
  width: 60%;
  position: relative;
  margin-right: 50px;

  @media (max-width: 650px) {
    width: 80%;
    margin-right: 10px;
  }
`;

const Entry = styled.div`
  color: rgb(195, 195, 195);
  margin: 1.6rem 0;
  background-color: #1a1a1a;
  padding: 1rem 1.4rem;
  border-radius: 15px;
  border-left: 3px solid #006633;
  transition: background-color 0.3s;

  &:hover {
    background-color: #145214;
  }

  @media (max-width: 650px) {
    margin: 1rem 0;
  }
`;

const Period = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #006633;
  letter-spacing: 0.5px;
`;

const Role = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 6px 0 2px;
  color: #e0e0e0;
`;

const Place = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #888;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #c3c3c3;
`;

const Experience = () => {
  return (
    <Container
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {experienceData.map((entry, i) => (
        <EntryWrapper
          key={i}
          variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
        >
          <Entry>
            <Period>{entry.period}</Period>
            <Role>• {entry.role}</Role>
            <Place>{entry.place}</Place>
            <Description>{entry.description}</Description>
          </Entry>
        </EntryWrapper>
      ))}
    </Container>
  );
};

export default Experience;
