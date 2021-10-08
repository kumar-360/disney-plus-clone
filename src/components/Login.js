import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    overflow-x: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    &::before {
        content: '';
        background-image: url('/images/login-background.jpg');
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.8;
        z-index: -1;
    }
`;
const CTA = styled.div`
    max-width: 40.625rem;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;
const CTALogoOne = styled.img`
    
`;
const CTALogoTwo = styled.img`
    width: 90%;
`;
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 1.125rem;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
`;
const Description = styled.p`
    font-size: 0.687rem;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Description>
                <CTALogoTwo src='/images/cta-logo-two.png' />
            </CTA>
        </Container>
    );
};

export default Login;