import { useEffect, useState } from "react"
import styled from "styled-components"

import { randomCountries, randomIndex } from "../helpers/usefulFunctions"

import Name from "../components/games/Name"
import Question from "../components/games/Question"
import AnswerOptions from "../components/games/AnswerOptions"
import Result from "../components/games/Result"

const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Picture = styled.img`
    width: 25em;
    border: solid lightgrey;
    margin: 1em 0em 0em 0em;
`

const MultiChoice = ({gameInfo, data}) => {

    const [answers, setAnswers] = useState([])
    const [guess, setGuess] = useState(null)

    useEffect(() => {
        setAnswers(prepAnswers(data, 3))
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
        return answersList
    }

    const correctAnswer = () => {
        const correctCountry = answers.filter(answer => answer.isCorrect)
        return correctCountry[0]
    }

    const processAnswer = (result) => {
        setGuess(result)
    }

    const newGame = () => {
        setGuess(null)
        setAnswers(prepAnswers(data, 3))
    }

    return(
        <Game>
            <Name text={gameInfo.name}/>
            <Question text={gameInfo.question}/>
            {correctAnswer() && <Picture src={correctAnswer().flag} />}
            {guess === null
                ? <AnswerOptions answers={answers} processAnswer={processAnswer}/>
                : <Result guess={guess} answer={correctAnswer()} type={gameInfo.type} newGame={newGame}/>}
        </Game>
    )

}

export default MultiChoice