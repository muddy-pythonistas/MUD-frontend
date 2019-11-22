import React  from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../actions'
import { useStateValue } from '../hooks/useStateValue';

const NavBar = (props) => {
  const [{ loginState }, dispatch] = useStateValue();
  let token = localStorage.getItem('token');

  return (
    <StyledNav>
      <h1>Python Quest</h1>
      <div className='navbar-links'>
        {props.location.pathname  === '/about' ? (
          <Link to='/game'>GAME</Link>
        ) : (
          <Link to='/about'>ABOUT</Link>
        )}
        {loginState.isLoggedIn || token ? (
          props.location.pathname  === '/' || props.location.pathname  === '/signup' ? (
            <Link to='/game'>GAME</Link>
          ) : (
          <Link to='/' onClick={() => logout(dispatch)}>LOGOUT</Link>
        )) : (
          <Link to='/'>LOGIN</Link>
        )}
      </div>
    </StyledNav>
  )
}

export default withRouter(NavBar);

const StyledNav = styled.div`
  top: 0;
  left: 0;
  padding: 1rem;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.titleFont};
  color: ${({ theme }) => theme.primary1};

  h1 {
    font-size: 2.5rem;
  }

  .navbar-links {
    a {
      font-size: ${({ theme }) => theme.largeFont};
      color: ${({ theme }) => theme.yellowAccent};
      text-decoration: none;
      margin-left: 2rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`