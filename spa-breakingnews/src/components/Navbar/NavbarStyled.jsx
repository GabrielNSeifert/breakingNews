import styled from 'styled-components';

const Button = styled.button`
    background-color: #0bade3;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: white;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin-right: 1.5rem;

    :hover {
        background-color: #0a86af;
    }
`;

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 1rem 0;
position: fixed;
top: 0;
background-color: white;
z-index: 1;
box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

const Img = styled.img`
    width: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`;

const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;
    margin-left: 1rem;

    i{
        position: absolute;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;
    }

    input{
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.3rem;

    :focus{
        border: 1px solid #0bade3;
    }

    }
`;

export default {
    Button,
    Nav,
    Img,
    InputSpace
}
