import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const EmailButton = styled(Link)`
  background: #cd853f;
  white-space: nowrap;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 20px;
  /* margin: 10px 0px; */
  color: #fff;
  max-width: 150px;
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
