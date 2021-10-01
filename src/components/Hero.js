import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import PlanetOne from '../images/planet.svg';
import PlanetTwo from '../images/planet-2.svg';
import PlanetThree from '../images/planet-3.svg';
import PlanetFour from '../images/planet-4.svg';

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) / 2);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }

    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Button = styled.div`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px;
    }

    ${Image}:nth-child(2) {
        top: 170px;
        right: 10px;
    }

    ${Image}:nth-child(3) {
        top: 350px;
        left: 50px;
    }

    ${Image}:nth-child(4) {
        bottom: 100px;
        right: 75px;
    }
`;

const Hero = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Welcome to Space</h1>
                    <p>Journey to the unknow</p>
                    <Button>Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={PlanetOne} alt='planet' />
                    <Image src={PlanetTwo} alt='planet' />
                    <Image src={PlanetThree} alt='planet' />
                    <Image src={PlanetFour} alt='planet' />
                </ColumnRight>
            </Container>
        </Section>
    );
}

export default Hero;