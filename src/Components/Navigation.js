import React, { Component } from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg'

export default class Navigation extends Component {
    render() {
        return (
            <NavigationStyled>
                <div className="logo">
                    <img src={logo} alt="Logo"></img>
                </div>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                    <a href="">Features</a>
                    </li>
                    <li>
                    <a href="">Pricing</a>
                    </li>
                </ul>
                <PrimaryButton/>
            </NavigationStyled>
        )
    }
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
    ul {
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        padding: 1em;
    }
`;