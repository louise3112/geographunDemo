import styled from "styled-components"
import { Link } from "react-router-dom"

import flags from "../images/flags.jpg"
import city from "../images/cityscape.jpg"
import population from "../images/population.jpeg"
import languages from "../images/languages.jpeg"

const GamesGrid = styled.ul`
    padding: 0em 8em 0em 8em;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    row-gap: 2.5em;
    justify-items: center;
`

const GameLink = styled(Link)`
    text-decoration: none;
    background-color: #5F898A;
    width: 25em;
    padding: 2em;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 6px 10px #4B5452;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GameImage = styled.img`
    width: 15em;
    height: 10em;
    border-radius: 4px;
`

const GameName = styled.h2`
    color: white;
    &:hover {
        color: gold;
    }
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.2em;
    margin: 1.2em 0em 0em 0em;
`

const GamesHome = () => {

    return (
        <GamesGrid>
            <GameLink to="/flags">
                <GameImage src={flags} />
                <GameName>Whose Flag Is It Anyway?</GameName>
            </GameLink>

            <GameLink to="/languages">
                <GameImage src={languages} />
                <GameName>Language Challenge</GameName>
            </GameLink>

            <GameLink to="/capitals">
                <GameImage src={city} />
                <GameName>A Question Of Capitals</GameName>
            </GameLink>

            <GameLink to="/populations">
                <GameImage src={population} />
                <GameName>Play Your Population Right</GameName>
            </GameLink>
        </GamesGrid>
    )
}

export default GamesHome

