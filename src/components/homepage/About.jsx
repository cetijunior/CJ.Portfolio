import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrap = styled.div`
  padding: 2.5rem 3rem;
  color: #c3c3c3;
  font-family: "Inconsolata", monospace;
  max-width: 720px;

  @media (max-width: 650px) {
    padding: 1.5rem;
  }
`;

const Prompt = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(195, 195, 195, 0.1);
  margin: 1.25rem 0 1.5rem;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #e0e0e0;
  margin: 0 0 0.3rem;

  span { color: #006633; }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.35rem 1rem;
  margin-bottom: 2rem;
  font-size: 13px;
`;

const InfoKey = styled.span`
  color: #006633;
  font-weight: 700;
  white-space: nowrap;
`;

const InfoVal = styled.span`
  color: #aaa;
`;

const Bio = styled.div`
  font-size: 14px;
  line-height: 1.85;
  color: #999;
  margin-bottom: 2rem;

  p { margin: 0 0 1rem; }
  p:last-child { margin-bottom: 0; }
`;

const TagsLabel = styled.p`
  font-size: 11px;
  color: #555;
  margin-bottom: 0.6rem;
  letter-spacing: 0.5px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background: #111;
  border: 1px solid rgba(0, 102, 51, 0.35);
  color: #00cc66;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 4px;
  letter-spacing: 0.3px;
`;

const CTA = styled.p`
  font-size: 14px;
  color: #006633;
  border-left: 2px solid #006633;
  padding-left: 1rem;
  line-height: 1.6;
`;

const techStack = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Swift", "SwiftUI", "Java", "Python",
  "Node.js", "Firebase", "MongoDB", "SQL",
  "HTML", "CSS", "Git",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

const About = () => (
  <Wrap>
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={item}>
        <Prompt>$ whoami</Prompt>
        <Title>Shefqet <span>"CJ"</span> Lame</Title>
        <Subtitle>Full-Stack & Mobile Developer — Albania</Subtitle>
        <Divider />
      </motion.div>

      <motion.div variants={item}>
        <InfoGrid>
          <InfoKey>› Background</InfoKey>
          <InfoVal>CS & Electronics Engineering</InfoVal>
          <InfoKey>› Status</InfoKey>
          <InfoVal>Open to opportunities · Building in public</InfoVal>
          <InfoKey>› Current</InfoKey>
          <InfoVal>TypeScript apps · iOS (Swift) · Web</InfoVal>
          <InfoKey>› GitHub</InfoKey>
          <InfoVal>50+ public repositories</InfoVal>
        </InfoGrid>
      </motion.div>

      <motion.div variants={item}>
        <Bio>
          <p>
            Self-taught developer with a background in Computer Science and Electronics Engineering. I build across the full stack — polished React and Next.js front-ends, back-end services with Node and databases, and native iOS apps in Swift.
          </p>
          <p>
            I care about clean code and real products. With 50+ public repositories and projects ranging from e-commerce platforms to iOS camera apps, I learn fastest by building and shipping.
          </p>
          <p>
            Looking to join a team where I can contribute, grow, and work on meaningful software.
          </p>
        </Bio>
      </motion.div>

      <motion.div variants={item}>
        <TagsLabel>// tech stack</TagsLabel>
        <Tags>
          {techStack.map(t => <Tag key={t}>{t}</Tag>)}
        </Tags>
      </motion.div>

      <motion.div variants={item}>
        <CTA>
          Open to remote work, freelance projects, and interesting collaborations. Let's build something great.
        </CTA>
      </motion.div>
    </motion.div>
  </Wrap>
);

export default About;
