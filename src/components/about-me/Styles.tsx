import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  color: #fff;
`;

export const Header = styled.div`
  margin-left: 15%;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: SpaceMono-Bold;
  font-size: 72px;
`;

export const Paragraph = styled.p<{ leftAlign: boolean }>`
  margin-top: 50px;
  font-family: SpaceMono-Regular;
  font-size: 24px;

  ${({ leftAlign }) =>
    leftAlign &&
    `
    font-size: 20px;
    margin: 5% 10% 0 27%;
  `}
`;

export const SoftSkillsTitle = styled.h3`
  margin-top: 5%;
  font-family: SpaceMono-Bold;
  text-align: center;
  font-size: 36px;
  margin-left: 15%;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 10% 0 25%;
`;

export const Skill = styled.div`
  text-align: center;
  flex: 0 0 33.333333%;
`;

export const SkillName = styled.div`
  margin-top: 20px;
  margin-bottom: 0;
`;

export const Border = styled.div`
  position: relative;
  display: inline-block;
  border: #fff 1px solid;
  background-color: #fff;
  border-radius: 15px;
  width: 70%;
  height: 10px;
`;

export const Progress = styled.div<{ percentage: number }>`
  position: absolute;
  width: ${({ percentage }) => `${percentage}%`};
  height: 8px;
  background-color: #0586fd;
  border-radius: 15px;
`;
