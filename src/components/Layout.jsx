import { NavigationBar } from './NavigationBar';
import styled from 'styled-components';
import { useEffect } from 'react';

const Content = styled.main`
  margin: 10px auto;
  position: relative;
  max-width: 990px;
  padding: 0 16px;
`;

const Title = styled.h2`
  margin-bottom: 26px;
  font-size: 24px;
`;

/**
 * Rendering of a global layout architecture, present on each page
 * @param {string} title
 * @param {object} children
 * @returns {JSX}
 */
export const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = 'HRnet | ' + title;
  }, [title]);

  return (
    <>
      <NavigationBar />
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </>
  );
};