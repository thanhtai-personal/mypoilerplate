import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    height: 40%;
`;

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;

const Paragraph = styled.p`
    color: black;
    font-size: 1rem;
`;

const App = () => (
    <Container>
        <Wrapper>
            <Title>
                <span role='img' aria-label='Bolt'>
                    ⚡
                </span>{' '}
                React Bolt
            </Title>
            <Paragraph>The most simple and robust React boilerplate.</Paragraph>
            <Paragraph>
                Read the article{' '}
                <Link to='https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a' target='_blank'>
                    here.
                </Link>
            </Paragraph>
        </Wrapper>
    </Container>
);

export default App;