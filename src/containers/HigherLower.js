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
        const answersList = randomCountriesArray.map((country) => {
            return {
                ...country,
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

            <HigherLowerCards answers={answers} processGame={processGame}/>

            {/* {gameResult === null
                ? <AnswerMulti answers={answers} processAnswer={processAnswer}/>
                : <PlayAgain category={gameInfo.category} newGame={newGame}/>} */}

        </Game>
    )

}

export default HigherLower