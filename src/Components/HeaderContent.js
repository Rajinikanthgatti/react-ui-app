import React, { Component } from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'

export default class HeaderContent extends Component {
    render() {
        return (
            <HeaderContentStyled>
                <div className="left-content">
                    <h1>Smart Banking for free lancers</h1>
                    <p className="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <SecondaryButton></SecondaryButton>
                </div>
                <div className="right-content">
                    <img src={phone} alt="Phone" className="phoone"></img>
                    <img src={ring1} alt="Ring" className="ring1"></img>
                    <img src={message1} alt="Message" className="message1"></img>
                    <img src={message2} alt="Message2" className="message2"></img>
                </div>
            </HeaderContentStyled>
        )
    }
}

const HeaderContentStyled = styled.div`
    display: flex;
    align-items: center;
    padding-top: 3em;
    .left-content{
        padding-right: 1em;
        max-width: 50%;
    }
    h1 {
        font-size: 2.25em;
    }
    .content-text {
        color: #fff;
        padding: 1.4em;
        font-size: .875em;
        padding-left: 0;
        line-height: 1.75em;
    }
    .right-content{
        display: flex;
        position: relative;
        justify-content: center;
        width: 100%;
        .phone{
            width: 80%;
        }
        .ring1{
            position: absolute;
            right: 0;
            bottom: 10%;
            animation: rotate 2s infinite;
        }
        .message1{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            position: absolute;
            bottom: 15%;
            left: 0;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
    }

    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes rotate{
            0%{
                transform: rotate(0deg);
            }
          
            100%{
                transform: rotate(360deg);
            }
        }
    }
    @media (min-width: 320px) and (max-width: 765px) {
        width: 100%;
        padding: 1em;
        display: inline-block;
        align-items: center;
        text-align: center;
        .left-content{
            max-width: none;
            padding: 0;
            .content-text{
                padding: 0;
            }
            button {
                display: inline-block;
                margin-top: 1em;
            }
        }
        .right-content{
            display: inline-block;
            .phoone{
                width: 100%;
                margin-left: 1.75em;
            }
            img{
                width: 25%;
            }
        }
    }
`;