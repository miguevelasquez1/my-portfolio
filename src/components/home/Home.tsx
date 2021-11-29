import React, { useEffect, useState } from 'react';
import presentation from '../../assets/svg/Presentation.svg';

import { Span, Anchor, dotnav, Img, HomeContainer, DotnavContainer, dotnavActive } from './Styles';

const Home: React.FC = () => {
  const [section, setSection] = useState<string>('home');

  const [scrollY, setScrollY] = useState(0);

  const setValue = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', setValue);
    };
    watchScroll();
    return () => {
      window.removeEventListener('scroll', setValue);
    };
  });

  return (
    <>
      <HomeContainer className="home-container">
        <DotnavContainer className="dotnav-container">
          <Anchor
            href="#home"
            dotnav={scrollY <= 500 && scrollY >= 0 ? dotnavActive : dotnav}
            onClick={() => setSection('home')}>
            <Span>Home</Span>
          </Anchor>
          <Anchor
            href="#services"
            dotnav={scrollY <= 1100 && scrollY >= 501 ? dotnavActive : dotnav}
            onClick={() => setSection('services')}>
            <Span>Services</Span>
          </Anchor>
          <Anchor
            href="#portfolio"
            dotnav={scrollY <= 1700 && scrollY >= 1101 ? dotnavActive : dotnav}
            onClick={() => setSection('portfolio')}>
            <Span>Portfolio</Span>
          </Anchor>
          <Anchor
            href="#about-me"
            dotnav={scrollY <= 2000 && scrollY >= 1701 ? dotnavActive : dotnav}
            onClick={() => setSection('about-me')}>
            <Span>About Me</Span>
          </Anchor>
          {/* <Anchor
            href="#hire-me"
            dotnav={section === 'hire-me' ? dotnavActive : dotnav}
            onClick={() => setSection('hire-me')}>
            <Span>Contact Me</Span>
          </Anchor> */}
        </DotnavContainer>

        <Img className="img-presentation" src={presentation} alt="presentation" />
      </HomeContainer>
    </>
  );
};

export default Home;
