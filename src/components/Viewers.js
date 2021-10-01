import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 1.875rem;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 1.562rem;
    padding: 1.875rem 0 1.625rem 0;
`;
const Wrap = styled.div`
    border: 3px solid rgba(249,249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms ease-out;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        border-color: rgba(249,249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`;

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src='images/viewers-disney.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-pixar.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-marvel.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-starwars.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-national.png' />
            </Wrap>
        </Container>
    );
};

export default Viewers;