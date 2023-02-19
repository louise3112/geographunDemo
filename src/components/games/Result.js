import styled from "styled-components"

const Answer = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
    margin: 0.8em 0em 0.5em 0em;
    max-width: 70%;
`

const Result = ({guess, type, answer, text}) => {

    const resultText = () => {
        if (type === "higher-lower") {
            return (
                <Answer>{guess
                    ? "You win! Well done!"
                    : "You lose... Better luck next time!"}
                </Answer>
            )
        } else {
            return (
                <Answer>{guess
                    ? "You got it! " + text + answer.name + "!"
                    : "Wrong! " + text + answer.name + "!"}
                </Answer>
            )
        }
    }

    return (
        <>{resultText()}</>
        // <Answer>{guess
        //     ? "You got it! " + text + answer.name + "!"
        //     : "Wrong! " + text + answer.name + "!"}
        // </Answer>
    )
}

export default Result