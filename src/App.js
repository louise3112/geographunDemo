import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import styled from "styled-components"

import { gameData } from "./helpers/gameData"

import NavBar from "./components/NavBar"
import GamesHome from "./components/GamesHome"
import GamePage from "./containers/GamePage"
import Countries from "./containers/Countries"
import CountryDetails from "./components/CountryDetails"
import Footer from "./components/Footer"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height:100vh;
`

function App() {

    return (
        <Container>
            <Router>
                <NavBar gameData={gameData}/>
                <Routes>
                    <Route path="/" element={<GamesHome gameData={gameData}/>}/>
                    <Route path="/flags" element={<GamePage gameInfo={gameData.flags} />} />
                    <Route path="/languages" element={<GamePage gameInfo={gameData.languages} />} />
                    <Route path="/capitals" element={<GamePage gameInfo={gameData.capitals} />} />
                    <Route path="/populations" element={<GamePage gameInfo={gameData.populations} />} />

                    <Route path="/countries" element={<Countries/>} />
                    <Route path="/countries/:name" element={<CountryDetails/>} />
                </Routes>
                <Footer />
            </Router>
        </Container>
    )
}

export default App;
