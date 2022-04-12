import {
  Header,
  Title,
  Paragraph,
  SoftSkillsTitle,
  AboutMeContainer,
  Skills,
  Skill,
  Border,
  Progress,
  SkillName
} from './Styles';

export const AboutMe = () => {
  const skills = [
    {
      name: 'Respect',
      percentage: 95
    },
    {
      name: 'Networking',
      percentage: 90
    },
    {
      name: 'Self Motivation',
      percentage: 90
    },
    {
      name: 'Active Listening',
      percentage: 95
    },
    {
      name: 'Teamwork',
      percentage: 60
    },
    {
      name: 'Patience',
      percentage: 70
    }
  ];

  return (
    <AboutMeContainer id="about-me">
      <Header>
        <Title>About Me</Title>
        <Paragraph leftAlign={false}>Hi. My name is Miguel Velasquez.</Paragraph>
      </Header>
      <Paragraph leftAlign={true}>
        I am an autodidact lover, full believer that any project can be real, the imagination hasn't limits.
      </Paragraph>
      <SoftSkillsTitle>SOFT SKILLS</SoftSkillsTitle>
      <Skills>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <SkillName>{skill.name}</SkillName>
            <Border>
              <Progress percentage={skill.percentage}></Progress>
            </Border>
          </Skill>
        ))}
      </Skills>
    </AboutMeContainer>
  );
};
