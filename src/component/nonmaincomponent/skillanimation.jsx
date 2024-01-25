// SkillBar.js
import React from "react";
import styled from "styled-components";
import Footer from "./footer";

const SkillBarWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
`;

const Skill = styled.div`
  margin-bottom: 10px;
  animation: skill 4s ease-in;
  @keyframes skill {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SkillName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  animation: fadeIn 2s ease-in-out;
  @keyframes fadeIn {
    from {
      width: 0%;
    }
    to {
      width: 90%;
    }
  }
`;
const SkillBar = ({ skills }) => {
  return (
    <>
      <SkillBarWrapper>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <SkillName>
              {skill.name} <span className="float-end">{skill.level}%</span>
            </SkillName>
            <ProgressBar>
              <Progress
                progress={skill.level}
                color={skill.color || "#3498db"}
              />
            </ProgressBar>
          </Skill>
        ))}
      </SkillBarWrapper>
    </>
  );
};

export default SkillBar;
