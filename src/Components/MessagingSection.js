import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layouts'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import messaging from '../img/conversation.svg'
import bgCricle from '../img/circleBg.svg'

export default function MessagingSection() {
    return (
        <MessagingSectionAnimated>
            <InnerLayout>
                <div className="messaging-content">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            We Support you in 5 different languages.
                        </h2>
                        <p className="m-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="images-container">
                            <img src={avatar1} alt="" className="image-1"></img>
                            <img src={avatar2} alt="" className="image-2"></img>
                            <img src={avatar3} alt="" className="image-3"></img>
                            <img src={avatar4} alt="" className="image-4"></img>
                            <img src={avatar5} alt="" className="image-5"></img>
                            <p>&nbsp;+25</p>
                        </div>
                        <img src={bgCricle} alt="" className="bgCircle"></img>
                    </div>
                    <div className="right-items">
                    <img src={messaging} alt="" className="messaging"></img>
                    <img src={bgCricle} alt="" className="bgCircle"></img>
                    </div>
                </div>
            </InnerLayout>
        </MessagingSectionAnimated>
    )
}

const MessagingSectionAnimated = styled.section`
    .messaging-content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left-items{
        padding-right: 2em;
        position: relative;
        .images-container{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -.875em;
            }
        }
        .bgCircle{
            position: absolute;
            top: -8%;
            left: -8%
        }
        .m-para{
            padding: 2em 0;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2em 0;
        }
        .bgCircle{
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -1em;
        }
    }
`;
