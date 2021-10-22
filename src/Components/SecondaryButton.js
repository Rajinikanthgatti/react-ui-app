import React, { Component } from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'

export default class SecondaryButton extends Component {
    render() {
        return (
            <SecondaryButtonStyled>
                Register
                <img src={arrow} alt=""></img>
            </SecondaryButtonStyled>
        )
    }
}
const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: .525em 1.75em;
    border-radius: 1.5em;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: none;
    align-items: center;
    display: flex;
    img{
        margin-left: .25em;
    }
`;