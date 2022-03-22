import React from 'react';
import styled from 'styled-components';
import logo from '../img/computer.png';
import { Fade } from 'react-reveal';

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
                <img src={logo} width= "60" height="60"/>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Experience</a>
                </li>
            </ul>
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
