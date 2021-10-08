import React, { useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginUser, logoutUser } from '../redux/actions/userActions';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
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
                transform: scaleX(0);
                transform-origin: left;
                transition: all 250ms ease-out;
            }
        }

        &:hover {
            span::after {
                transform: scale(1);
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

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const Header = () => {
    const userName = useSelector(state => state.user).name;
    const userEmail = useSelector(state => state.user).email;
    const userPhoto = useSelector(state => state.user).photo;

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(loginUser(user));
                history.push('/');
            }
        })

    }, []);

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(loginUser(user));
                history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    };
    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(logoutUser());
                history.push('/login');
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <Nav>
            <Link to='/'>
                <Logo src='/images/logo.svg' />
            </Link>
            {!userName ? <Login onClick={signIn}>Login</Login> : <>
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
                {userPhoto && <UserImg src={userPhoto} onClick={signOut} />}
            </>
            }
        </Nav>
    );
};

export default Header;