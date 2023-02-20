import styled from "styled-components"
import { Link } from "react-router-dom"

import Logo from "../images/logo.png"

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
const DropdownContent = styled.div`
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 18em;
    padding: 1em;
    background-color: #3c7f61;
`
const GamesDropdown = styled.div`
    position: relative;
    display: inline-block;
    width: 18em;
    text-align: center;
    &:hover ${DropdownContent} {
        visibility: visible;
    }
`
const GamesLink = styled(SectionLink)`
    width: 18em;
    margin: 0.5em 0em 0em 0em;
`

const NavBar = ({gameData}) => {

    return (
        <NavBarContainer>
            <LogoLink to="/">
                <img src={Logo} alt="geograPHUN logo" height="80em"/>
            </LogoLink>

            <GamesDropdown>
                <SectionLink to="/">Games</SectionLink>
                <DropdownContent>
                    <GamesLink to="/flags">{gameData.flags.name}</GamesLink>
                    <GamesLink to="/languages">{gameData.languages.name}</GamesLink>
                    <GamesLink to="/capitals">{gameData.capitals.name}</GamesLink>
                    <GamesLink to="/populations">{gameData.populations.name}</GamesLink>
                </DropdownContent>
            </GamesDropdown>

            <SectionLink to="/countries">Countries Facts</SectionLink>
        </NavBarContainer>
    )
}
    
export default NavBar
