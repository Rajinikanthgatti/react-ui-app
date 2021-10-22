import React, { Component } from 'react'
import styled from 'styled-components'

export default class PrimaryButton extends Component {
    render() {
        return (
            <ButtonStyled>
                Sign Up
            </ButtonStyled>
        )
    }
};

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .525em 1.75em;
    border-radius: 1.5em;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: none;
`;
