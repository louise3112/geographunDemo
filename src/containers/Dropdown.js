import { useEffect, useState } from "react"
import styled from "styled-components"

import { randomCountries, randomIndex } from "../helpers/usefulFunctions"

import Question from "../components/games/Question"
import Clue from "../components/games/Clue"
import AnswerDropdown from "../components/games/AnswerDropdown"
import Result from "../components/games/Result"
import PlayAgain from "../components/games/PlayAgain"

const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Dropdown = ({gameInfo, data}) => {

    const [correctAnswer, setCorrectAnswer] = useState({})
    const [guess, setGuess] = useState(null)

    useEffect(() => {
        prepAnswer(data, 1)
    }, [])

    const prepAnswer = (countriesArray, n) => {

        const randomCountry = randomCountries(countriesArray, n)
        setCorrectAnswer(randomCountry[0])
    }

    const processGuess = (userGuess) => {
        setGuess(userGuess === correctAnswer.name.toLowerCase())
    }

    const newGame = () => {
        setGuess(null)
        prepAnswer(data, 1)
    }

    return(
        <Game>
            {guess === null 
                ? <Question text={gameInfo.question}/>
                : <Result guess={guess} answer={correctAnswer} text={gameInfo.answer}/>}
            
            {correctAnswer !== {} && <Clue gameInfo={gameInfo} answer={correctAnswer}/>}

            {guess === null
                ? <AnswerDropdown allCountries={data} processGuess={processGuess}/>
                : <PlayAgain category={gameInfo.category} newGame={newGame}/>}
        </Game>
    )

}

export default Dropdown