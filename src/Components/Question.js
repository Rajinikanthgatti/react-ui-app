import React, {useState} from 'react'
import styled from 'styled-components'
import plus from '../img/plus.svg'
import minus from '../img/minus.svg'

export default function Question({title, description}) {
    const [toogle, setToogle] = useState(false);
    const btnToogler = () => {
        setToogle(!toogle);
    }
    return (
        <QuestionAnimated>
            <div className="q-con">
                <div className="toogle-title">
                    <h4>{title}</h4>
                    <button onClick={btnToogler}>
                        {toogle ? <img src={minus} alt=""></img> :  <img src={plus} alt=""></img>}
                    </button>
                </div>
                {toogle && <p>{description}</p>}
            </div>
        </QuestionAnimated>
    )
}
const QuestionAnimated = styled.div`
    background-color: #fff;
    margin: 1em 0;
    padding: 1em 1em;
    border-radius: 1em;
    transition: all .4s ease-in-out;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    h4{
        color: #16194F;
        transition: all .4s ease-in-out;
    }
    .toogle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .4s ease-in-out;
        button{
            background: transparent;
            outline: none;
            border: none;
        }
    }
`;