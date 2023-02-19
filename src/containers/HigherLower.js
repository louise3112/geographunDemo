import { useState, useEffect } from "react"
import { randomCountries } from "../helpers/usefulFunctions"

import Question from "../components/games/Question"
import Result from "../components/games/Result"
import PlayAgain from "../components/games/PlayAgain"
import HigherLowerCards from "../components/games/HigherLowerCards"

import styled from "styled-components"

const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HigherLower = ({gameInfo, data, updateScores}) => {

    const [answers, setAnswers] = useState([])
    const [gameResult, setGameResult] = useState(null)

    useEffect( () => {
        prepAnswers(data, 6)
    }, [])

    const prepAnswers = (countriesArray, n) => {

        const randomCountriesArray = randomCountries(countriesArray, n)
        const answersList = randomCountriesArray.map((country, index) => {
            return {
                ...country,
                cardPosition: index,
                status: "none",
                answer: "",
                guessCorrect: null
            }
        })

        answersList[0].status = "played"
        answersList[1].status = "current"

        for (let i=1; i < answersList.length; i++) {
            if (answersList[i][gameInfo.category] >= answersList[i-1][gameInfo.category]) {
                answersList[i].answer = "higher"
            } else {
                answersList[i].answer = "lower"
            }
        }
        
        setAnswers(answersList)
    }

    const processGuess = (country, guess) => {
        const updatedAnswers = answers.map(answer => {
            return {...answer}
        })
        const result = (country.answer === guess)

        updatedAnswers[country.cardPosition].status = "played"
        updatedAnswers[country.cardPosition].guessCorrect = result

        if (country.cardPosition === answers.length - 1 | !result) {
            processGame(result)
        } else {
            updatedAnswers[country.cardPosition + 1].status = "current"
        }
        setAnswers(updatedAnswers)
    }

    const processGame = (result) => {
        setGameResult(result)
        updateScores(result)
    }

    const newGame = () => {
        setGameResult(null)
        prepAnswers(data, 6)
    }

    return(
        <Game>
            {gameResult === null && <Question text={gameInfo.question}/>}

            {gameResult !== null && 
                <>
                    <Result guess={gameResult} type={gameInfo.type}/>
                    <PlayAgain category={gameInfo.category} newGame={newGame}/>
                </>}

            <HigherLowerCards answers={answers} processGuess={processGuess}/>
        </Game>
    )

}

export default HigherLower