import {
  ServAppContainer,
  ServAppContent,
  ServAppImg,
  ServAppTitle,
  ServeAppSubTitle,
  ServeAppParagraph
} from './Styles';

import ServicesApp from '../../assets/img/iPhone 12 Pro Max.svg';

const Portfolio = () => {
  return (
    <ServAppContainer id="portfolio">
      <ServAppImg src={ServicesApp} alt="Services App" />

      <ServAppContent>
        <ServAppTitle>Own Project</ServAppTitle>
        <ServeAppSubTitle>Challenge</ServeAppSubTitle>
        <ServeAppParagraph>
          Create a hybrid app with frontend and backend (Ionic/Angular and Firebase).
        </ServeAppParagraph>
      </ServAppContent>
    </ServAppContainer>
  );
};

export default Portfolio;
