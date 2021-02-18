import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import useScrollFadeIn from '../util/useScrollFadeIn';
import { IoMdArrowRoundForward } from 'react-icons/io';

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

const ContainerTwo = styled.div`
  padding: 3rem calc((100vw - 1500px) / 2);
  display: grid;
  grid-template-columns: 0 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  h1 {
    margin: 32px;
    font-size: clamp(1.5rem, 6vw, 2rem);
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
  grid-template-rows: 450px;
  border-top: 200px solid #000d1a;
  border-bottom: 200px solid #000d1a;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const ColumnLeftImg = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  flex-direction: column;

  img {
    width: ${({ imgSizeWidth }) => imgSizeWidth + '%'};
    height: ${({ imgSizeHeight }) => imgSizeHeight + '%'};
    object-fit: cover;
    padding: 1px;
    border: 1px solid #021a40;
    background-color: #fff;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 90%;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 20px;
  }

  a {
    margin-bottom: 50px;
  }
`;

const ColumnRightImg = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  flex-direction: column;
  align-self: flex-end;

  img {
    width: ${({ imgSizeWidth }) => imgSizeWidth + '%'};
    height: ${({ imgSizeHeight }) => imgSizeHeight + '%'};
    object-fit: cover;
    padding: 1px;
    border: 1px solid #021a40;
    background-color: #fff;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 90%;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 20px;
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
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
    <Section name="/paris">
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
    <Section name="/slazburg">
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

export const InfoSectionThree = ({
  heading,
  imageOne,
  imageTwo,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
}) => {
  const animatedItemLeft = useScrollFadeIn('left');
  const animatedItemRight = useScrollFadeIn('right');
  return (
    <Section name="/europe">
      <ContainerTwo>
        <h1>{heading}</h1>
        <ColumnLeftImg
          imgSizeWidth={100}
          imgSizeHeight={60}
          {...animatedItemRight}
        >
          <img src={imageOne} alt="home" />
          <p>{paragraphOne}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
            <Arrow />
          </Button>
        </ColumnLeftImg>
        <ColumnRightImg
          imgSizeWidth={100}
          imgSizeHeight={60}
          {...animatedItemLeft}
        >
          <img src={imageTwo} alt="home2" />
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
            <Arrow />
          </Button>
        </ColumnRightImg>
      </ContainerTwo>
    </Section>
  );
};
