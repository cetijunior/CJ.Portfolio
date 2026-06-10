import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
`;

const SectionTitle = styled.h2`
  font-size: 11px;
  font-weight: 700;
  color: #555;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 1rem;

  & + & {
    margin-top: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 8px;
  margin-bottom: 2.5rem;
`;

const Card = styled(motion.div)`
  background: #141414;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: #1a2a1a;
    border-color: rgba(0, 102, 51, 0.35);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
`;

const SkillName = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #ddd;
`;

const PctLabel = styled.span`
  font-size: 11px;
  color: #006633;
  font-weight: 700;
`;

const BarTrack = styled.div`
  height: 3px;
  background: rgba(195, 195, 195, 0.08);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.7rem;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #003d1f, #006633);
  border-radius: 4px;
`;

const Details = styled(motion.div)`
  overflow: hidden;
  font-size: 11px;
  color: #666;
  line-height: 1.7;

  ul {
    margin: 0;
    padding-left: 1rem;
    list-style: none;
  }

  li::before {
    content: "› ";
    color: #006633;
  }
`;

const langs = [
  { name: "JavaScript", pct: 85, details: ["Core language & ES2022+", "React & Next.js ecosystem", "Node.js backend"] },
  { name: "TypeScript", pct: 80, details: ["Type-safe full-stack dev", "Generics & advanced types", "Active in 2026 projects"] },
  { name: "Swift", pct: 70, details: ["iOS app development", "SwiftUI interfaces", "Native mobile experiences"] },
  { name: "HTML", pct: 90, details: ["Semantic markup", "Accessibility (a11y)", "SEO fundamentals"] },
  { name: "CSS", pct: 85, details: ["Flexbox & Grid layouts", "Responsive design", "Styled Components, SASS"] },
  { name: "Java", pct: 70, details: ["OOP principles", "Desktop applications", "MySQL & database integration"] },
  { name: "Python", pct: 70, details: ["Scripting & automation", "Data analysis", "Back-end development"] },
  { name: "SQL", pct: 75, details: ["Database design", "Complex queries", "MySQL, Firebase Firestore"] },
];

const tools = [
  { name: "Git & GitHub", pct: 88, details: ["Version control", "PRs & code review", "50+ open-source repos"] },
  { name: "VS Code", pct: 85, details: ["Extensions & config", "Debugging & IntelliSense", "Integrated terminal"] },
  { name: "Xcode", pct: 70, details: ["iOS development", "Simulator & debugging", "Swift package manager"] },
  { name: "Photoshop", pct: 75, details: ["UI mockups", "Image editing", "Digital art"] },
  { name: "Lightroom", pct: 80, details: ["Photo editing", "Color correction", "Batch processing"] },
  { name: "FL Studio", pct: 90, details: ["Music production", "Mixing & mastering", "Audio engineering"] },
  { name: "Canva", pct: 80, details: ["Quick designs", "Social media assets", "Presentations"] },
  { name: "Figma", pct: 65, details: ["UI/UX design", "Wireframing", "Component libraries"] },
];

const SkillCard = ({ skill, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      onClick={() => setOpen(o => !o)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
    >
      <CardHeader>
        <SkillName>{skill.name}</SkillName>
        <PctLabel>{skill.pct}%</PctLabel>
      </CardHeader>
      <BarTrack>
        <BarFill
          initial={{ width: 0 }}
          animate={{ width: `${skill.pct}%` }}
          transition={{ duration: 0.9, delay: index * 0.035 + 0.15, ease: "easeOut" }}
        />
      </BarTrack>
      <AnimatePresence>
        {open && (
          <Details
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <ul>
              {skill.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </Details>
        )}
      </AnimatePresence>
    </Card>
  );
};

const Skills = () => (
  <Wrap>
    <Prompt>$ ls -la skills/ &nbsp;// click a card to expand</Prompt>
    <SectionTitle>// languages & frameworks</SectionTitle>
    <Grid>
      {langs.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
    </Grid>
    <SectionTitle>// tools & software</SectionTitle>
    <Grid>
      {tools.map((s, i) => <SkillCard key={s.name} skill={s} index={i + langs.length} />)}
    </Grid>
  </Wrap>
);

export default Skills;
