import styled from "styled-components";
import banner from "../../assets/banner.png"

export const Home = styled.section`
    width: 100%;
    height: 100vh;
    background: url(${banner}) no-repeat center center / cover;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 0 10%;

    @media screen and (max-width: 1130px) {
        padding: 0 2%;
    }
`
export const HomeText = styled.main`
    
`
export const H3 = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: var(--main-color);
    text-transform: capitalize;
    line-height: 1;
`
export const H1 = styled.h1`
    font-size: 3.15rem;
    font-weight: 700;
    color: var(--text-color);
    line-height: 1.5;
    text-transform: capitalize;
    margin: 1.3rem 0 1.1rem 0;

    span {
        color: var(--main-color);
    }

    @media screen and (max-width: 930px) {
        font-size: 2.8rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 2.4rem;
    }

    @media screen and (max-width: 440px) {
        font-size: 2rem;
    }
`
export const Paragraph = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    color: #5b5f64;
    letter-spacing: 1px;
    line-height: 1.4;
    margin-bottom: 2.5rem;
`
export const Btn = styled.a`
    display: inline-block;
    padding: 10px 23px;
    background-color: var(--main-color);
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    border-radius: 0.6em;
    text-transform: capitalize;
    transition: 0.5s ease;

    &:hover {
        background-color: var(--second-color);
    }

`