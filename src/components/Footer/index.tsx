'use client';

import * as Styled from './styled';
import { Button, Skeleton } from 'antd';

export const Footer = () => {
  return (
    <>
      <Skeleton active />
      <Styled.Wrapper>© 2023 - Higor Skowronski</Styled.Wrapper>
      <Button>Aqui é um button</Button>
    </>
  );
};
