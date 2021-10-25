import React from 'react'
import styled from 'styled-components'

export default function ChartStats({name, amount}) {
    return (
        <ChartStatsStyled>
            <div className="chart-left-stat">
                <div className="stats">
                    <p>{name}</p>
                    <h4>{amount}</h4>
                </div>
            </div>
            <div className="chart-right-stat"></div>
        </ChartStatsStyled>
    )
}

const ChartStatsStyled = styled.div`
    border: 1px solid var(--border-colour);
    border-radius: 50px;
    width: 45%;
    height: 8em;
    padding: 1.5em;
    h4{
        font-size: 1.5em;
        color: var(--purple-primary);
    }
    p{
        color: #000;
        font-weight: bold;
    }
`;