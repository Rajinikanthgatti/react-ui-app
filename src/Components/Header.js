import React, { Component } from 'react';
import styled from 'styled-components'
import background from '../img/bg.svg'
import HeaderContent from './HeaderContent';
import Navigation from './Navigation';

export default class Header extends Component {
    render() {
        return (
            <HeaderStyled>
                <div className="header-content">
                    <Navigation></Navigation>
                    <HeaderContent/>
                </div>
            </HeaderStyled>
        )
    }
}

const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 10em;
    }
    @media (min-width: 320px) and (max-width: 765px) {
        .header-content{
            padding: 0;
            width: 100%;
        }
      }
`;