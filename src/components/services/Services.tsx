import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import {
  ServicesContainer,
  Container,
  Square,
  Title,
  Button,
  squareDefault,
  squareExtended,
  squareExtendedTwo,
  UnorderedList,
  UnorderedListContainer,
  UnorderedListContainerTwo
} from './Styles';

const Services: React.FC = () => {
  const [extendedOne, setExtendedOne] = useState(false);
  const [extendedTwo, setExtendedTwo] = useState(false);

  const [fadePropOne, setFadePropOne] = useState({
    fade: 'fade-in',
    opacity: '100',
    transition: 'opacity 3s ease'
  });
  const [fadePropTwo, setFadePropTwo] = useState({
    fade: 'fade-in',
    opacity: '100',
    transition: 'opacity 3s ease'
  });

  useEffect(() => {
    if (fadePropOne.fade === 'fade-in') {
      setFadePropOne({ fade: 'fade-out', opacity: '0', transition: 'opacity 3s ease' });
    } else {
      setFadePropOne({ fade: 'fade-in', opacity: '100', transition: 'opacity 3s ease' });
    }
  }, [extendedOne]);

  useEffect(() => {
    if (fadePropTwo.fade === 'fade-in') {
      setFadePropTwo({ fade: 'fade-out', opacity: '0', transition: 'opacity 3s ease' });
    } else {
      setFadePropTwo({ fade: 'fade-in', opacity: '100', transition: 'opacity 3s ease' });
    }
  }, [extendedTwo]);

  return (
    <ServicesContainer id="services">
      <Container>
        <Square squareStyle={extendedOne ? squareExtended : squareDefault}>
          <Title>
            FullStack <br />
            Developer
          </Title>

          {extendedOne && (
            <UnorderedListContainer>
              <UnorderedList transition={fadePropOne}>
                <li>- Angular</li>
                <li>- Ionic</li>
                <li>- React</li>
                <li>- SASS</li>
                <li>- Bootstrap</li>
                <li>- NodeJS</li>
                <li>- Express</li>
                <li>- NestJS</li>
                <li>- MongoDB</li>
              </UnorderedList>
            </UnorderedListContainer>
          )}

          <Button onClick={() => setExtendedOne(!extendedOne)}>
            {extendedOne ? (
              <ArrowUpwardIcon sx={{ fill: 'white' }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fill: 'white' }} />
            )}
          </Button>
        </Square>

        <Square squareStyle={extendedTwo ? squareExtendedTwo : squareDefault}>
          <Title>
            UX / UI <br />
            Designer
          </Title>

          {extendedTwo && (
            <UnorderedListContainerTwo>
              <UnorderedList transition={fadePropTwo}>
                <li>- Figma</li>
              </UnorderedList>
            </UnorderedListContainerTwo>
          )}

          <Button onClick={() => setExtendedTwo(!extendedTwo)}>
            {extendedTwo ? (
              <ArrowUpwardIcon sx={{ fill: 'white' }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fill: 'white' }} />
            )}
          </Button>
        </Square>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
