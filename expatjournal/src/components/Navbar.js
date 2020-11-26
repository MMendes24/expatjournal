import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
    display:flex;
    justify-content: space-around;
    margin: 2%;
    padding: 1%;
    font-size: 1.8rem;
    text-decoration:none;
    
    h2 {
        font-size: 2.4rem;
        text-align:left;
        margin: 0;
    }

    a {
        text-decoration: none;
        font-family: 'Architects Daughter', cursive;
        color: #262626;
    }
    
    a:hover{
        text-decoration: underline;
        transition: 0.3s;
    }
    `
const Navbar = () => {
    const id = localStorage.getItem('user_id')
    return (
        <StyledNav className='nav-bar'>
            <h2>Expatjournal</h2>
            <Link to='/'>Login</Link>
            <Link to={`/dashboard/${id}`}>Dashboard</Link>
        </StyledNav>
    )
}

export default Navbar