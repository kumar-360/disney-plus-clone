import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: calc(3.5vw + 5px);
    position: relative;
`;
const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.4;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Title = styled.div`
    font-family: 'Permanent Marker', cursive;
    font-size: 6rem;
    line-height: 1;
    height: 28vh;
    min-height: 170px;
    margin-top: 60px;
`;
const Controls = styled.div`
    display: flex;
    align-items: center;
`;
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 0.937rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background-color: rgb(198, 198, 198);
    }
`;
const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`;
const AddButton = styled.button`
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;
    span {
        font-size: 1.875rem;
        color: white;
    }
`;
const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);
`;
const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 0.937rem;
    min-height: 1.25rem;
    margin-top: 26px;
`;
const Description = styled.div`
    line-height: 1.4;
    font: 1.25rem;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 47.5rem;
`;

const Detail = () => {
    const { id } = useParams();
    const movies = useSelector(state => state.allMovies).movies;
    const movie = movies.length > 0 && movies.filter((movie) => {
        return movie.id === id;
    });

    return (
        <Container>
            <Background>
                {movies.length > 0 && movie.length > 0 && <img src={movie[0].backgroundImg} />}
            </Background>
            <Title>
                {movies.length > 0 && movie.length > 0 && movie[0].title}
            </Title>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
            {movies.length > 0 && movie.length > 0 && movie[0].subTitle}
            </Subtitle>
            <Description>
            {movies.length > 0 && movie.length > 0 && movie[0].description}
            </Description>
        </Container>
    );
};

export default Detail;