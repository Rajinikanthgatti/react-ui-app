import React from 'react'
import styled from 'styled-components'

export default function Card({
    account,amount,text,button,card,active,inactive,check,
    checkDis,text1, text2,text3,text4,text5,text6,text7,text8
}) {
    return (
        <CardStyleAnimate>
            <h4 className="card-title">
                {account}
            </h4>
            <h4 className="card-title">
                {amount} <span>/ m</span>
            </h4>
            <p className="c-para">{text}</p>
            <div className="button-con">
                <button>{button}</button>
            </div>
            <div className="card-image-con">
                <img src={card} alt="" />
            </div>
            <div className="plan-con">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="list-con">
                <p className="text-check">
                    <img src={check} alt="" />
                    {text1}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text2}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text3}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text4}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text5}
                </p>
                <p className="text-check">
                    <img src={checkDis} alt="" />
                    {text6}
                </p>
                <p className="text-check">
                    <img src={checkDis} alt="" />
                    {text7}
                </p>
                <p className="text-check">
                    <img src={checkDis} alt="" />
                    {text8}
                </p>
            </div>
        </CardStyleAnimate>
    )
}
const CardStyleAnimate = styled.div`
    background-color: #fff;
    padding: 0 1em;
    border-radius: 2em;
    margin: 0 1em;
    box-shadow: 0px 25px 50px rgb(60 60 60 / 37%);
    max-width: 30%;
    .card-title{
        font-size: 1.625em;
        color: #000;
        text-align: center;
        padding: .25em 0;
    }
    .button-con{
        text-align: center;
        padding:1em 0;
        button{
            border: 1px solid #16194F;
            padding: .8em 1.8em;
            border-radius: 2em;
            background: transparent;
            color: #000;
            outline: none;
            cursor: pointer;
            font-size: inherit;
        }
    }
    .card-image-con{
        display: flex;
        justify-content: center;
        img{
            width: 70%;
        }
    }
    .plan-con{
        display: flex;
        justify-content: center;
        padding: 1em;
        img{
            padding: 0 .5em;
        }
    }
    .text-check{
        display: flex;
        align-items: center;
        padding: .25em 0;
        img{
            padding-right: .3em;
            width: 1.25em;
        }
        &:nth-child(6){
            color: #B7B7B7
        }
        &:nth-child(7){
            color: #B7B7B7
        }
        &:nth-child(8){
            color: #B7B7B7
        }
    }
`;