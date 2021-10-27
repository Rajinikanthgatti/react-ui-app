import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layouts';
import logo from '../img/logo.svg'

export default function Footer() {
    return (
        <FooterStyled>
            
                <div className="footer-con">
                    <div className="logo-con">
                        <img src={logo} alt=""></img>
                        <p>Copyright @2021 LoremIpsum <br/> 
                            All rights reserved.</p>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Fees</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            
        </FooterStyled>
    )
}
const FooterStyled = styled.div`
    padding: 5em 10em;
    background-color: #000;
    .logo-con{
        margin-right: 1em;
    }
    .footer-con{
        display: flex;
        justify-content: space-evenly;
    }
    .botton-nav{
        display: flex;
        justify-content: space-between;
    }
    .links1, .links2, .links3{
        margin: 0 1em;
        li{
            padding: 1em;
            padding-top: 0;
        }
    }
    @media (min-width: 320px) and (max-width: 765px) {
        padding: 0 1em;
        .footer-con{
            display: inline-block;
            text-align: center;
            align-items: center;
            width: 100%;
            .logo-con{
                margin: 0;
                img{
                    padding: 1em;
                }
                p{
                    padding-bottom: 1em;
                }
            }
            .links1, .links2, .links3{
                margin: 0;
            }
        }
    }
`;