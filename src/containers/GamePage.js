import { useState, useEffect } from "react"
import MultiChoice from "./MultiChoice"
import Dropdown from "./Dropdown"

import styled from "styled-components"

const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const GameName = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5em;
    text-align: center;
    margin: 0.5em 0em 0.5em 0em;
`

const GamePage = ({gameInfo}) => {

    const [allCountries, setAllCountries] = useState([])

    useEffect( () => {
        getData()
    }, [])

    const getData = () => {
        fetch ("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => res.filter(country => country.unMember))
            .then(res => {
                return res.map(country => ({
                    name: country.name.common,
                    code: country.cca3,
                    flag: country.flags.svg,
                    population: country.population,
                    language: Object.values(country.languages)[0],
                    capital: country.capital[0],
                    region: country.region,
                    subregion: country.subregion,
                    latitude: country.latlng[0],
                    longitude: country.latlng[1],
                    maps: country.maps.googleMaps,
                    timezones: country.timezones, //array
                    continents: country.continents, // array
                    currencies: country.currencies, // object
                    landlocked: country.landlocked,// boolean
                    borders: country.borders // array
                }))
            })
            .then(res => setAllCountries(res))
    }

    const gameType = () => {
        if (gameInfo.type === "multichoice") {
            return <MultiChoice gameInfo={gameInfo} data={allCountries}/>
        } else if (gameInfo.type === "dropdown") {
            return <Dropdown gameInfo={gameInfo} data={allCountries}/>
        }
    }

    return (
        <Game>
            <GameName>{gameInfo.name}</GameName>
            {allCountries.length > 0 && gameType()}
        </Game>
    )


}

export default GamePage