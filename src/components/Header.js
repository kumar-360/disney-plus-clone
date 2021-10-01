import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 2.25rem;
    overflow-x: hidden;
`;
const Logo = styled.img`
    width: 5rem;
`;
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 0.75rem;
        margin-left: 1.562rem;
        cursor: pointer;

        img {
            height: 1.25rem;
        }
        span {
            font-size: 0.812rem;
            letter-spacing: 0.089rem;
            position: relative;

            &::after {
                content: '';
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                /* opacity: 0; */
                transform: scaleX(0);
                transform-origin: left;
                transition: all 250ms ease-out;
            }
        }

        &:hover {
            span::after {
                transform: scale(1);
                /* opacity: 1; */
            }
        }
    }
`;
const UserImg = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
`;

const Header = () => {
    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg' />
        </Nav>
    );
};

export default Header;