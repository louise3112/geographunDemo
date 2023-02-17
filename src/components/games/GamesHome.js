import styled from "styled-components"
import { Link } from "react-router-dom"

import { gameData } from "../../helpers/gameData"
import flags from "../../images/flags.jpg"
// import flags from "../images/flags.jpg"
import city from "../../images/cityscape.jpg"
import population from "../../images/population.jpeg"
import languages from "../../images/languages.jpeg"

const GamesGrid = styled.ul`
    padding: 2% 4% 2% 4%;
    margin: 0;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    row-gap: 5%;
    justify-items: center;
`

const GameLink = styled(Link)`
    text-decoration: none;
    background-color: #5F898A;
    width: 60%;
    padding: 4% 5% 4% 5%;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 6px 10px #4B5452;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const GameImage = styled.img`
    width: 60%;
    height: 70%;
    border-radius: 4px;
`

const GameName = styled.h2`
    color: white;
    &:hover {
        color: gold;
    }
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.2em;
    margin: 1em 0em 0em 0em;
`

const GamesHome = () => {

    return (
        <GamesGrid>
            <GameLink to="/flags">
                <GameImage src={flags} />
                <GameName>{gameData.flags.name}</GameName>
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

