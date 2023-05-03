import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10%;

    @media screen and (max-width: 1130px) {
        padding: 20px 2%;
    }
`
export const MenuIcon = styled.div`
    font-size: 36px;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 930px) {
        display: inline-flex;
        align-items: center;
    }
`
export const Logo = styled.a`
    img {
        width: 120px;
        height: auto;
    }
`
export const NavBar = styled.nav`
    @media screen and (max-width: 930px) {
        position: absolute;
        top: 100%;
        left: -200%;
        width: 280px;
        height: 100vh;
        background-color: var(--main-color);
        display: flex;
        justify-content: center;
        padding: 100px 0;
        transition: all 0.5s ease;

        &.active {
            left: 0;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 930px) {
        flex-direction: column;
    }
`
export const List = styled.li`
    padding: 0 12px;
    margin: 0 10px;

    @media screen and (max-width: 930px) {
        padding: 0;
        margin: 1rem 0;
    }
`
export const Link = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-bottom: 2px solid var(--main-color);
    padding: 5px;
    transition: all 0.5s ease;

    &:hover {
        color: var(--main-color);
    }

    @media screen and (max-width: 930px) {
        display: block;
        font-size: 1.1rem;
        border-bottom: 2px solid transparent;

        &:hover {
            color: #fff;
            border-bottom: 2px solid #fff;
        }
    }
`
export const Btn = styled.a`
    display: inline-block;
    padding: 10px 23px;
    background-color: var(--main-color);
    color: #fff;
    border-radius: 0.6em;
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    transition: 0.5s ease;

    &:hover {
        background-color: var(--second-color);
    }

    @media screen and (max-width: 320px) {
        display: none;
    }
`