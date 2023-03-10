import styled from 'styled-components';

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width : 100%;

    box-shadow: rgba(50,50,105,0.15) 0px 2px 5px 0px, 
        rgba(0,0,0,0.05) 0px 1px 1px 0px;
    border-radius: 0.3rem;
    padding: 2rem;
    box-sizing: border-box;
`;

export const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;  
    gap: 1rem;

    img {
        width: 50%;
        height: 20rem;
        object-fit: cover;
        object-fit: center;
    }

    h2{
        margin-bottom: 1rem;
    }
`;

export const  CardFooter = styled.article`
    display: flex;
    gap: 0.5rem;

    div{
        display: flex;
        gap: 0.2rem;
    }

`;


