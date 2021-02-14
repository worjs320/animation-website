import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import useScrollFadeIn from '../util/useScrollFadeIn';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1500px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    font-size: 20px;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: ${({ imgSizeWidth }) => imgSizeWidth + '%'};
    height: ${({ imgSizeHeight }) => imgSizeHeight + '%'};
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const ContainerLine = styled.div`
  padding: 3rem calc((100vw - 1500px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;
  border-top: 200px solid #000d1a;
  border-bottom: 200px solid #000d1a;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  const animatedItemUp = useScrollFadeIn('up');
  const animatedItemLeft = useScrollFadeIn('down');
  return (
    <Section name="/about">
      <Container>
        <ColumnLeft reverse={reverse} {...animatedItemLeft}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse} imgSizeHeight={100} imgSizeWidth={100}>
          <img src={image} alt="home" {...animatedItemUp} />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export const InfoSectionTwo = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  const animatedItemLeft = useScrollFadeIn('left');
  const animatedItemRight = useScrollFadeIn('right');
  return (
    <Section name="/rentals">
      <ContainerLine>
        <ColumnLeft {...animatedItemLeft} reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight
          {...animatedItemRight}
          reverse={reverse}
          imgSizeHeight={160}
          imgSizeWidth={100}
        >
          <img src={image} alt="home" />
        </ColumnRight>
      </ContainerLine>
    </Section>
  );
};
