import { useEffect, useState } from "react"
import styled from "styled-components"

import { randomCountries, randomIndex } from "../helpers/usefulFunctions"

import Name from "../components/games/Name"
import Question from "../components/games/Question"
import Flag from "../components/games/Flag"
import AnswerOptions from "../components/games/AnswerOptions"
import Result from "../components/games/Result"

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
            <Name text={gameInfo.name}/>
            <Question text={gameInfo.question}/>
            {gameInfo.type === "flag" && <Flag answer={correctAnswer}/>}

            {guess === null
                ? <AnswerOptions answers={answers} processAnswer={processAnswer}/>
                : <Result guess={guess} answer={correctAnswer} type={gameInfo.type} newGame={newGame}/>}
        </Game>
    )

}

export default MultiChoice