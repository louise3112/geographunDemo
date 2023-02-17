import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import { gameData } from "./helpers/gameData"

import NavBar from "./components/NavBar"
import GamesHome from "./components/games/GamesHome"
import MultiChoice from "./containers/MultiChoice"
import Footer from "./components/Footer"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height:100vh;
`

function App() {

    const [allCountries, setAllCountries] = useState([])

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
                    language: country.languages, // array
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

    // const getData = () => {
    //     getAllCountries()
    //         .then(allCountries => {
    //             const selectedCountries = prepCountries(allCountries)
    //             setCountriesToPlay(selectedCountries)
    //         })
    // }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<GamesHome />}/>
                    {allCountries !== [] && <Route path="/flags" element={<MultiChoice gameInfo={gameData.flags} data={allCountries}/>}/>}
                    {/* <Route path="/languages" />
                    <Route path="/capitals" />
                    <Route path="/populations" />

                    <Route path="/countries" />
                    <Route path="/countries/:id" /> */}
                </Routes>
                <Footer />
            </Router>
        </Container>
    )
}

export default App;
