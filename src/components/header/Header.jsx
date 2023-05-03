import { Header, MenuIcon, Logo, NavBar, NavList,
List, Link, Btn } from "./styled";
import logo from "../../assets/logo.png"
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useRef, useState } from "react";
 
export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const navRef = useRef(null)

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }

    return(
        <Header>
            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
            <Logo href="/"><img src={logo} alt="Logo" /></Logo>

            <NavBar ref={navRef}>
                <NavList>
                    <List><Link href="#">Home</Link></List>
                    <List><Link href="#">Shop</Link></List>
                    <List><Link href="#">Reviews</Link></List>
                    <List><Link href="#">Demos</Link></List>
                    <List><Link href="#">Feature</Link></List>
                </NavList>
            </NavBar>

            <Btn href="#">Shop now</Btn>
        </Header>
    )
}