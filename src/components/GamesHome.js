import styled from "styled-components"
import { Link } from "react-router-dom"
import { gameData } from "../helpers/gameData"

const GamesGrid = styled.ul`
    flex-grow: 1;
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
                <GameImage src={gameData.flags.image} />
                <GameName>{gameData.flags.name}</GameName>
            </GameLink>

            <GameLink to="/languages">
                <GameImage src={gameData.languages.image} />
                <GameName>{gameData.languages.name}</GameName>
            </GameLink>

            <GameLink to="/capitals">
                <GameImage src={gameData.capitals.image} />
                <GameName>{gameData.capitals.name}</GameName>
            </GameLink>

            <GameLink to="/populations">
                <GameImage src={gameData.populations.image} />
                <GameName>{gameData.populations.name}</GameName>
            </GameLink>
        </GamesGrid>
    )
}

export default GamesHome

