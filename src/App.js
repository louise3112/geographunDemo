// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import NavBar from "./components/NavBar"
import GamesHome from "./components/GamesHome"
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
                <NavBar />
                <Routes>
                    <Route path="/" element={<GamesHome />}/>
                    <Route path="/flags" />
                    <Route path="/languages" />
                    <Route path="/capitals" />
                    <Route path="/populations" />

                    <Route path="/countries" />
                    <Route path="/countries/:id" />
                </Routes>
                <Footer />
            </Router>
        </Container>
    )
}

export default App;
