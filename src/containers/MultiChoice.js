import { useEffect, useState } from "react"
import styled from "styled-components"

import { randomCountries, randomIndex } from "../helpers/usefulFunctions"

import Question from "../components/games/Question"
import Clue from "../components/games/Clue"
import AnswerMulti from "../components/games/AnswerMulti"
import Result from "../components/games/Result"
import PlayAgain from "../components/games/PlayAgain"

const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MultiChoice = ({gameInfo, data}) => {

    const [answers, setAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState({})
    const [guess, setGuess] = useState(null)

    useEffect(() => {
        prepAnswers(data, 3)
    }, [])

    const prepAnswers = (countriesArray, n) => {

        const randomCountriesArray = randomCountries(countriesArray, n)
        const correctAnswerIndex = randomIndex(n)
        const answersList = randomCountriesArray.map((country, index) => {
            return {
                ...country,
                isCorrect: index === correctAnswerIndex
            }
        })
        setAnswers(answersList)

        const correctAnswerOption = answersList.filter(answer => answer.isCorrect)
        setCorrectAnswer(correctAnswerOption[0])
    }

    const processAnswer = (result) => {
        setGuess(result)
    }

    const newGame = () => {
        setGuess(null)
        prepAnswers(data, 3)
    }

    return(
        <Game>
            {guess === null 
                ? <Question text={gameInfo.question}/>
                : <Result guess={guess} answer={correctAnswer} text={gameInfo.answer}/>}
            
            {correctAnswer !== {} && <Clue gameInfo={gameInfo} answer={correctAnswer}/>}

            {/* {gameInfo.category === "flag" 
                ? <Flag answer={correctAnswer}/>
                : <Image} */}

            {guess === null
                ? <AnswerMulti answers={answers} processAnswer={processAnswer}/>
                : <PlayAgain category={gameInfo.category} newGame={newGame}/>}
        </Game>
    )

}

export default MultiChoice