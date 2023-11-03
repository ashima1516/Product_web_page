import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
<>
<HeaderContainer>
    <Logo>
        <img src='./images/logo.png' alt="logo" />
        <h1>Dev Town</h1>
    </Logo>
    <Nav>
    <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Us </NavLink>
   </Nav>
</HeaderContainer>
</>
  )
}

const HeaderContainer=styled.header`
background:#3b4149;
color:#ff9900;
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 20px;

@media(max-width:768px){
    flex-direction:column;
    text-align:center;
}

`
const Logo=styled.div`
display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
 
    background:#fff;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`
const Nav=styled.nav`
display: flex;
gap: 20px;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`
const NavLink = styled(Link)`
text-decoration: none;
font-size:20px;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #ff9900;
  }
`
