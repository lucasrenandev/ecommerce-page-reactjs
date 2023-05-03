import { useEffect } from "react";
import { Home, HomeText, H3, H1, Paragraph, Btn } from "./styled";

export default function home() {
    useEffect(() => {
        const input = document.getElementById("input")
        const typed = new Typed(input, {
            strings: ["E-commerce website", "Fashion store", "Grocery website", "Shopping website"],
            typeSpeed: 70,
            backSpeed: 60,
            loop: true
        })
        
        return(() => {
            typed.destroy()
        }) 
    }, [])

    return(
        <Home>
            <HomeText>
                <H3>Save up to 60% off</H3>
                <H1>The standard <br /> built for <span id='input'></span></H1>
                <Paragraph>Start working with <span>Kumo</span> that can provide everything you need to create <br /> high quality of E-Commerce Website.</Paragraph>
                <Btn href="#">View demos</Btn>
            </HomeText>
        </Home>
    )
}