import React, { FC } from 'react';
import styled from 'styled-components';
import { Black, White } from '../styles/colors';

const Wrap = styled.div`
  width: calc(100% - 0.6rem * 2);
  background-color: ${Black};
  color: ${White};

  font-size: 1.2rem;

  padding: 0.3rem 0.6rem;

  display: grid;
  grid-template-columns: 1fr auto;
`;

const Link = styled.a`
  color: hsl(210, 65%, 85%);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: FC = () => {
  return (
    <Wrap>
      <span>파랑새밈 v1.6.0</span>
      <span>
        <Link href="https://twitter.com/Ranol__">Ranol☆P</Link>가 만들었어요!
      </span>
    </Wrap>
  );
};

export default Header;
