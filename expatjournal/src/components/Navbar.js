import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
    const StyledNav = styled.nav`
    display:flex;
    justify-content: space-around;
    margin: 4%;
    padding: 1%;
    font-size: 1.8rem;
    text-decoration:none;
    h1{
        font-size: 2.4rem;
        text-align:left;
        margin: 0;
    }
    a{
        text-decoration: none;
        font-family: 'Patrick Hand', cursive;
        color:black;
    }
    a:hover{
        font-size: 2.2rem;
        transition: 0.3s;
    }
    `
const Navbar = () => {
    const id = localStorage.getItem('user_id')
    return (
        <StyledNav className='nav-bar'>
            <h1>The World Through My Eyes</h1>
            <a href='https://wizardly-mclean-829421.netlify.app/index.html'>Home</a>
            <Link to='/'>Login</Link>
            <Link to={`/register`}>Register</Link>
            <Link to={`/dashboard/${id}`}>Dashboard</Link>
        </StyledNav>
    )
}

export default Navbar