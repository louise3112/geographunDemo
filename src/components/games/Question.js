import styled from "styled-components"

const QuestionText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3em;
    text-align: center;
    margin: 0.5em 0em 0em 0em;
    max-width: 30em;
`

const Question = ({text}) => {
    return <QuestionText>{text}</QuestionText>
}

export default Question