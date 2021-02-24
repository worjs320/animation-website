import React from 'react';
import styled from 'styled-components';
import { EmailButton } from './Button';
import { Link } from 'react-router-dom';
import {
  FaBookReader,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    display: grid;
    justify-items: center;
    grid-template-rows: 60px;
  }
`;

const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin: 0px 10px;
  outline: none;
  border: none;
  font-size: 16px;

  &::placeholer {
    color: #242424;
  }
`;

const FooterLinkContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  min-height: 200px;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: #fff;
  font-weight: 400;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: #e9e9e9;

  &:hover {
    color: #cd853f;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SocialIcon = styled(FaBookReader)``;

const SocialIcons = styled.small`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join the BARAK to receive our best vacation deals.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput
            name="emial"
            type="email"
            placeholder="Your Email"
          ></FormInput>
          <EmailButton>Send</EmailButton>
        </Form>
      </FooterSubscription>
      <FooterLinkContainer>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Africa</FooterLinkTitle>
            <FooterLink>Nigeria</FooterLink>
            <FooterLink>Ethiopia</FooterLink>
            <FooterLink>Egypt</FooterLink>
            <FooterLink>DR Congo</FooterLink>
            <FooterLink>Tanzania</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Europe</FooterLinkTitle>
            <FooterLink>Austria</FooterLink>
            <FooterLink>Spain</FooterLink>
            <FooterLink>Germany</FooterLink>
            <FooterLink>France</FooterLink>
            <FooterLink>Italy</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>East Asia</FooterLinkTitle>
            <FooterLink>Mongolia</FooterLink>
            <FooterLink>South Korea</FooterLink>
            <FooterLink>Japan</FooterLink>
            <FooterLink>Taiwan</FooterLink>
            <FooterLink>China</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Americas</FooterLinkTitle>
            <FooterLink>United States</FooterLink>
            <FooterLink>Brazil</FooterLink>
            <FooterLink>Mexico</FooterLink>
            <FooterLink>Colombia</FooterLink>
            <FooterLink>Argentina</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinkContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            &nbsp;BARAK
          </SocialLogo>
          <WebsiteRights>BARAK © {currentYear}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
