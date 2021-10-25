import React, { Component } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layouts';
import card from '../img/creditcard.svg'

export default class CardSection extends Component {
    render() {
        return (
            <CardSectionStyled>
                <InnerLayout>
                    <div className="card-container">
                        <div className="card-left">
                            <h2 className="secondary-heading">One Card for all your payments</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="card-right">
                            <img src={card} alt=""></img>
                        </div>
                    </div>
                </InnerLayout>
            </CardSectionStyled>
        )
    }
}
const CardSectionStyled = styled.section`
    .card-container{
        display: flex;
        width: 100%;
        padding: 0 3em;
    }
    .card-right{
        display: flex;
        justify-content: flex-end;
        width: 50%;
    }
    .card-left{
        width: 50%;
        p{
            padding: 1em 0;
        }
    }
`;