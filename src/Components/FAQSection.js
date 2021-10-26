import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layouts';
import lines from '../img/lines.svg'
import questions from '../questions';
import Question from './Question';

export default function FAQSection() {
    return (
        <FAQSectionStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className="c-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="lines">
                    {/*<img src={lines} alt=""></img>*/}
                </div>
                <div className="questions-con">
                    {
                        questions.map((q) => {
                            return <Question key={q.id} {...q}/>
                        })
                    }
                </div>
            </InnerLayout>
        </FAQSectionStyled>
    )
}

const FAQSectionStyled = styled.div`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .lines{
        position: absolute;
        left: 0;
        width: 100%;
        img{
            width: 100%;
        }
    }
`;