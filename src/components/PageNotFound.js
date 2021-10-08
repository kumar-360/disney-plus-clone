import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Permanent Marker', cursive;
    font-size: 4rem;
    text-align: center;
    margin: auto;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PageNotFound = () => {
    return (
        <Container>
            <div>Sorry, page not found.</div>
        </Container>
    );
};

export default PageNotFound;