import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import { projects as curated } from "../components/data/data";
import Github from "../assets/github.svg";
import webIcon from "../assets/web.png";

const Wrap = styled.div`
  padding: 2.5rem 3rem;
  color: #c3c3c3;
  font-family: "Inconsolata", monospace;

  @media (max-width: 650px) {
    padding: 1.5rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;
`;

const Prompt = styled.p`
  font-size: 12px;
  color: #555;
  margin: 0;
  letter-spacing: 0.5px;
`;

const LiveBadge = styled.span`
  font-size: 10px;
  color: ${({ $live }) => ($live ? "#00cc66" : "#555")};
  border: 1px solid ${({ $live }) => ($live ? "rgba(0,204,102,0.3)" : "#333")};
  padding: 2px 7px;
  border-radius: 4px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = styled(motion.div)`
  background: #141414;
  border-radius: 10px;
  padding: 1.2rem 1.4rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: #1a2a1a;
    border-color: rgba(0, 102, 51, 0.35);
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const CardLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const ProjectName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #e0e0e0;
  margin: 0 0 3px;
`;

const Stack = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const CardRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const LangBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #888;
`;

const LangDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ $color }) => $color || "#888"};
  display: inline-block;
  flex-shrink: 0;
`;

const Year = styled.span`
  font-size: 11px;
  color: #444;
  white-space: nowrap;
`;

const Stars = styled.span`
  font-size: 11px;
  color: #555;
`;

const LinkIcons = styled.div`
  display: flex;
  gap: 6px;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 6px;
  background: #222;
  transition: background 0.18s;

  img { width: 14px; height: 14px; }

  &:hover { background: #006633; }
`;

const Desc = styled(motion.p)`
  font-size: 13px;
  color: #888;
  line-height: 1.75;
  margin: 0.9rem 0 0;
  overflow: hidden;
  border-top: 1px solid rgba(195, 195, 195, 0.07);
  padding-top: 0.9rem;
`;

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Swift: "#f05138",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
};

const ProjectCard = ({ project, ghData, index }) => {
  const [open, setOpen] = useState(false);
  const lang = ghData?.language;
  const stars = ghData?.stargazers_count;
  const yearClean = project.year.replace("Personal, ", "").replace(".", "");

  return (
    <Card
      onClick={() => setOpen(o => !o)}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.32, delay: index * 0.06 }}
    >
      <CardTop>
        <CardLeft>
          <ProjectName>• {project.name}</ProjectName>
          <Stack>{project.projects}</Stack>
        </CardLeft>
        <CardRight>
          {lang && (
            <LangBadge>
              <LangDot $color={LANG_COLORS[lang]} />
              {lang}
            </LangBadge>
          )}
          {stars > 0 && <Stars>★ {stars}</Stars>}
          <Year>{yearClean}</Year>
          <LinkIcons>
            <IconLink
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              title="GitHub"
            >
              <img src={Github} alt="GitHub" />
            </IconLink>
            {project.web && (
              <IconLink
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                title="Live Demo"
              >
                <img src={webIcon} alt="Live" />
              </IconLink>
            )}
          </LinkIcons>
        </CardRight>
      </CardTop>

      <AnimatePresence>
        {open && (
          <Desc
            key="desc"
            initial={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "0.9rem", paddingTop: "0.9rem" }}
            exit={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0 }}
            transition={{ duration: 0.28 }}
          >
            {project.description}
          </Desc>
        )}
      </AnimatePresence>
    </Card>
  );
};

const Projects = () => {
  const { repos, loading, error } = useGitHubRepos();

  const merged = curated.map(p => ({
    project: p,
    ghData: repos.find(r => p.url.includes(`/${r.name}`)) || null,
  }));

  return (
    <Wrap>
      <HeaderRow>
        <Prompt>$ git log --all --oneline</Prompt>
        {loading && <LiveBadge>fetching github...</LiveBadge>}
        {!loading && !error && <LiveBadge $live>live data</LiveBadge>}
        {error && <LiveBadge>cached</LiveBadge>}
      </HeaderRow>
      <Grid>
        {merged.map(({ project, ghData }, i) => (
          <ProjectCard key={project.name} project={project} ghData={ghData} index={i} />
        ))}
      </Grid>
    </Wrap>
  );
};

export default Projects;
