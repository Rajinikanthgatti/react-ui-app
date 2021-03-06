import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layouts';
import Card from './Card';
import card from '../img/creditcard.svg';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';
import check from '../img/check.svg';
import checkDisabled from '../img/check-disabled.svg';

export default function PaymentSection() {
    return (
        <PaymentSectionAnimated>
            <InnerLayout>
                <div className="payment-con">
                    <h3 className="small-heading">An exceptional service, <span>at the right price</span></h3>
                    <p className="c-para">Start with our free plan and switch to premium as you grow.</p>
                    <div className="card-con">
                    <Card 
                    account={'Free'}
                    amount={'$0'}
                    text={'Manage your business with a simple and efficient account.'}
                    button={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis={checkDisabled}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                    
                    <Card 
                    account={'Premium'}
                    amount={'$10'}
                    text={'Manage your business with a simple and efficient account.'}
                    button={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis={checkDisabled}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                </div>
                </div>
            </InnerLayout>
        </PaymentSectionAnimated>
    )
}
const PaymentSectionAnimated = styled.section`
    .card-con{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .c-para{
        text-align: center;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        .payment-con{
            padding: 0 1em;
            .small-heading{
                line-height: 1.2em;
            }
            .card-con{
                display: inline-block;
                width: 100%;
                text-align: center;
                align-items: center;
            }

        }  
    }
    @media (min-width: 481px) and (max-width: 765px) {
        .payment-con{
            width: 100%;
            padding: 0 1em;
            .small-heading{
                line-height: 1.2em;
            }
            .card-con{
                width: 100%;
            }
        }
    }
`;