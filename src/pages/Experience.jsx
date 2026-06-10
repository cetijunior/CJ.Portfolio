import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { experienceData } from "../components/data/data";

const Wrap = styled.div`
  padding: 2.5rem 3rem;
  color: #c3c3c3;
  font-family: "Inconsolata", monospace;

  @media (max-width: 650px) {
    padding: 1.5rem;
  }
`;

const Prompt = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 2.5rem;
  letter-spacing: 0.5px;
`;

const Note = styled.p`
  font-size: 12px;
  color: #444;
  border-left: 2px solid #333;
  padding-left: 1rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 1.75rem;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background: linear-gradient(to bottom, #006633 60%, transparent);
  }
`;

const Entry = styled(motion.div)`
  position: relative;
  padding-bottom: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    left: -1.46rem;
    top: 7px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #006633;
    box-shadow: 0 0 8px rgba(0, 204, 102, 0.4);
  }

  &:last-child {
    padding-bottom: 0;

    &::before {
      background: #333;
      box-shadow: none;
    }
  }
`;

const Period = styled.span`
  display: block;
  font-size: 11px;
  color: #006633;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

const Role = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #e0e0e0;
  margin: 0 0 3px;
`;

const Place = styled.p`
  font-size: 12px;
  color: #555;
  margin: 0 0 10px;
`;

const Description = styled.p`
  font-size: 13px;
  color: #888;
  line-height: 1.75;
  margin: 0;
  max-width: 580px;
`;

const Experience = () => (
  <Wrap>
    <Prompt>$ cat experience.log</Prompt>
    <Note>
      Self-taught developer — no formal employer yet. This timeline reflects the real milestones: first project, first production deployment, first iOS app, and everything in between.
    </Note>
    <Timeline>
      {experienceData.map((entry, i) => (
        <Entry
          key={i}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.38, delay: i * 0.1 }}
        >
          <Period>{entry.period}</Period>
          <Role>{entry.role}</Role>
          <Place>{entry.place}</Place>
          <Description>{entry.description}</Description>
        </Entry>
      ))}
    </Timeline>
  </Wrap>
);

export default Experience;
