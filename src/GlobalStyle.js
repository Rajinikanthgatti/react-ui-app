import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root{
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
        
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
        color: #fff;
    }
    body{
        background-color: var(--neutral-light);
        color: inherit;
        font-size: 1.2em;
    }
    p{
        color: var(--lavender-secondary);
    }
    .secondary-heading{
        font-size: 2.25em;
        color: var(--purple-primary);
        line-height: 1.8em;
    }
    .small-heading{
        font-size: 2.5em;
        color: var(--purple-primary);
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }
    .c-para{
        text-align: center;
    }
`;
export default GlobalStyle;