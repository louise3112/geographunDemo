import { HashRouter as Router, Routes, Route } from "react-router-dom"
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

    // import {Route, HashRouter as Router, Switch} from ‘react-router-dom’;


    return (
        <Container>
            <Router baseline="/">
                <NavBar gameData={gameData}/>
                <Routes>
                    <Route path="/geographun-demo" element={<GamesHome gameData={gameData}/>}/>
                    <Route path="/geographun-demo/flags" element={<GamePage gameInfo={gameData.flags} />} />
                    <Route path="/geographun-demo/languages" element={<GamePage gameInfo={gameData.languages} />} />
                    <Route path="/geographun-demo/capitals" element={<GamePage gameInfo={gameData.capitals} />} />
                    <Route path="/geographun-demo/populations" element={<GamePage gameInfo={gameData.populations} />} />

                    <Route path="/geographun-demo/countries" element={<Countries/>} />
                    <Route path="/geographun-demo/countries/:name" element={<CountryDetails/>} />
                </Routes>
                <Footer />
            </Router>
        </Container>
    )
}

export default App;
