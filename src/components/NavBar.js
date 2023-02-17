import styled from "styled-components"
import { Link } from "react-router-dom"

import Logo from "../images/logo.png"

// import { useState } from "react";

const NavBarContainer = styled.ul`
    margin: 0;
    padding: 0.8em;
    background-color: #3c7f61;
    display: flex;
    align-items: center;
`

const LogoLink = styled(Link)`
    margin-right: 2em;
`

const SectionLink = styled(Link)`
    width: 10em;
    text-decoration: none;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.3em;
    color: white;
    &:hover {
        color: gold;
    }
`

// const QuizzesDropDown = styled.div`
//     display: flex;
//     flex-direction: column;
//     background-color: #3c7f61;
//     color: #fff;
//     position: absolute;
//     top: 60px;
//     left: 0;
//     z-index: 1;
// `

const NavBar = () => {

    // const [showQuizzes, setShowQuizzes] = useState(false)

    return (
        <NavBarContainer>
            <LogoLink to="/">
                <img src={Logo} alt="geograPHUN logo" height="80em"/>
            </LogoLink>
            <SectionLink to="/">Games</SectionLink>

            {/* <NavBarLayout>
                <NavLink to="/" style={{ textAlign: "center", padding: "0 2.5em" }} onMouseEnter={() => setShowQuizzes(!showQuizzes)}>
                Games
                </NavLink>
                {showQuizzes && (
                    <QuizzesDropDown>
                        <NavLink to="/FlagQuiz">Whose Flag Is It Anyway?</NavLink>
                        <NavLink to="/LanguageQuiz">Language Challenge</NavLink>
                        <NavLink to="/CapitalsQuiz">A Question of Capitals</NavLink>
                        <NavLink to="/PopulationQuiz">Play Your Population Right</NavLink>
                    </QuizzesDropDown>
                )}
            </NavBarLayout> */}

            <SectionLink to="/countries">Countries Facts</SectionLink>
        </NavBarContainer>
    )
}
    
export default NavBar