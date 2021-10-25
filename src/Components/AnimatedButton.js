import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'
import blob1 from '../img/blob_top.svg'
import blob2 from '../img/blob_bottom.svg'

export default function AnimatedButton({name}) {
    return (
        <AnimatedButtonStyled>
            {name}
            <img src={arrow} alt="" className="arrow"/>
            <img src={blob1} alt="" className="blob1"/>
            <img src={blob2} alt="" className="blob2"/>
        </AnimatedButtonStyled>
    )
}

const AnimatedButtonStyled = styled.button`
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
    position: relative;
    .blob1{
        position: absolute;
        top: 0;
        right: 0;
    }
    .blob2{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .arrow{
        padding-left: .9em;
    }
    &:hover{
        transition: all .4s ease-in-out;
        .blob1{
            transition: all .4s ease-in-out;
            transform: translateX(-75%);
        }
        .blob2{
            transition: all .4s ease-in-out;
            transform: translateX(75%);
        }
    }
    img{
        padding-left: 0.9em;
    }
`;