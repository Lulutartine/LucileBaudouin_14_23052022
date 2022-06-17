import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.2s;
  }
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

/**
 * Renders the Header Navigation Bar
 * @returns {JSX}
 */
export const NavigationBar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <Title>HRnet</Title>
      </LogoWrapper>
      <LinkWrapper>
        <NavLink to="/">Create New</NavLink>
        <NavLink to="/employee-list">View Employees</NavLink>
      </LinkWrapper>
    </Nav>
  );
};