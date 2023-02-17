import styled from "styled-components"

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Answer = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
`

const PlayAgain = styled.button`
    font-family: 'Oswald', sans-serif;
    font-size: 1.2em; 
    font-weight: bold;
    height: 4em;
    width: 20em;
    background-color: #F3DC65;
    border-radius: 6px;
    cursor: pointer; 
`

const Result = ({guess, answer, type, newGame}) => {

    return (
        <ResultsContainer>
            <Answer>{guess
                ? "You got it! This " + type + " belongs to " + answer.name + "!"
                : "Wrong! This " + type + " belongs to " + answer.name + "!"} 
            </Answer>
            <PlayAgain onClick={() => {newGame()}}>Next {type}</PlayAgain>
        </ResultsContainer>
    )
}

export default Result