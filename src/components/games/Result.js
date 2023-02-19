import styled from "styled-components"

const Answer = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
    margin: 0.8em 0em 0.5em 0em;
`

const Result = ({guess, answer, text}) => {

    return (
        <Answer>{guess
            ? "You got it! " + text + answer.name + "!"
            : "Wrong! " + text + answer.name + "!"}
        </Answer>
    )
}

export default Result