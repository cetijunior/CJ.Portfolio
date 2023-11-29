import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Chart from "chart.js/auto";

const Conteiner = styled(motion.div)`
  height: auto;
  color: #c3c3c3;
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;
  z-index: 99;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: calc(100% - 300px); /* Adjust the width to leave space for the panel (adjust the percentage as needed) */
  max-height: auto;

  @media (max-width: 800px) {
    width: 100%; /* Take up the full width */
    max-height: 30%; /* Remove the max height */
    flex-direction: column; /* Display skills in a single column */
  }
`;

export const ContainerSlideIn = styled(motion.div)`
  flex: 1;
  min-width: calc(30% - 0.5rem);
  max-width: calc(20% - 0.5rem); // Adjust the maximum width for two by two layout

  // Add a maximum height for each skill box to prevent it from getting too tall
  max-height: 50vh; // You can adjust the percentage as needed

  @media (max-width: 800px) {
    min-width: 100%; // Take up the full width
    max-width: 100%; // Take up the full width
  }
`;

const StyledSkill = styled.div`
  color: rgb(195, 195, 195);
  margin: 1.6rem;
`;

const SkillsChart = () => {
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
  

  const floatFromRightVariants = {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.8,
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

  const chartData = {
    labels: skillsList.map((skill) => skill.name),
    datasets: [
      {
        label: "Experience",
        data: skillsList.map((skill) => skill.experience),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartRefs = skillsList.map(() => null);

  useEffect(() => {
    const chartInstances = chartRefs.map((ref, i) => {
      if (ref) {
        ref.chartInstance && ref.chartInstance.destroy();
        return new Chart(ref, {
          type: "bar",
          data: chartData,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
            maintainAspectRatio: true,
            responsive: true,
          },
        });
      }
      return null;
    });

    return () => {
      chartInstances.forEach((chartInstance) => {
        chartInstance && chartInstance.destroy();
      });
    };
  }, [skillsList, chartData]);

  return (
    <>
      <Conteiner
        initial="hidden"
        animate="visible"
        variants={floatFromRightVariants}
      >
        {skillsList.map((skill, i) => (
          <ContainerSlideIn key={i} variants={floatFromRightVariants}>
            <StyledSkill>
              <h3 style={{ fontWeight: 400 }}>• {skill.name}</h3>
              <p>Experience: {skill.experience}%</p>
              <div style={{ width: "100%", marginTop: '30px', height: "auto" }}>
                <canvas
                  ref={(ref) => (chartRefs[i] = ref)}
                  width="auto"
                  height="auto"
                ></canvas>
              </div>
            </StyledSkill>
          </ContainerSlideIn>
        ))}
      </Conteiner>
    </>
  );
};

export default SkillsChart;
