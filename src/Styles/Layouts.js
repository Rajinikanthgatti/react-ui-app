import styled from "styled-components";

export const OuterLayout = styled.section`
    padding: 12em 10em;
    @media (min-width: 320px) and (max-width: 765px) {
        padding: 0;
    }
`;

export const InnerLayout = styled.section`
    padding: 8em 0;   
    @media (min-width: 320px) and (max-width: 765px) {
        padding: 0;
        padding-top: 5em;
    } 
`;