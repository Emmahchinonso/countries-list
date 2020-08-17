import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Nav = styled.nav`
  max-width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  margin: 0 auto;

  @media (max-width: 768px){
    padding: 1.5rem .5rem;
  }
`;

const NavHeader = styled.header`
  width: 100%;
  background: var(--elements-background);
  box-shadow: 0 2px 5px var(--shadow);
`;

const Logo = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.3rem;
  font-weight: 900;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  
  transition: .3s ease;
    &:hover{
      transform: translateY(-.5rem);
  }
`;

const Text = styled.span`
  font-weight: 600;
  font-size: .9rem;
  margin-left: .3rem;
`

const Header = () => {
  return (
    <NavHeader>
      <Nav>
        <Logo to="/">Where in the world?</Logo>
        <Button>
          <i className="fas fa-moon"></i>
          <Text>Dark Mode</Text>
        </Button>
      </Nav>
    </NavHeader>
  )
}

export default Header;