import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Styles/Layouts';
import ChartStats from './ChartStats';
import chart from '../img/chart.svg'
import AnimatedButton from './AnimatedButton';

function ChartSection() {
    return (
        <ChartSectionStyled>
            <InnerLayout>
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={'Balance'} amount={'$4250'}/>
                                <ChartStats name={'Last Transaction'} amount={'$1000'}/>
                            </div>
                        </div>
                        <img src={chart} alt="chart"></img>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your financials like a Pro in no time
                        </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <AnimatedButton name={'Learn More'}></AnimatedButton>
                    </div>
                </div>
            </InnerLayout>
        </ChartSectionStyled>
    )
}
const ChartSectionStyled = styled.section`
    .chart-container{
        display: flex;
        padding: 0 3em;
        width: 100%;
    }
    .chart-left{
        width: 40%;
        .stats-money{
            display: flex;
            justify-content: space-between;
            padding-bottom: 1.5em;
        }
        img{
            box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
            border-radius: 50px;
            width: 100%;
        }
    }
    .chart-right{
        width: 60%;
        padding-left: 2em;
        p{
            padding: 1.3em 0;
        }
    }
`;

export default ChartSection;