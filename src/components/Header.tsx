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
      <span>
        아무도 안 만들어서 <br />
        내가 직접 만드는 <br />
        트위터 치환 밈 변환기
      </span>
      <span>
        파랑새밈은 <br />
        <Link href="https://twitter.com/Ranol__">RanolP</Link>가<br />{' '}
        만들었어요!
      </span>
    </Wrap>
  );
};

export default Header;
