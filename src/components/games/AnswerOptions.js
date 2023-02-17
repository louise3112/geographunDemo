import styled from "styled-components"

const AnswerBlock = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
`

const AnswerOption = styled.button`
    font-family: 'Oswald', sans-serif;
    font-size: 1.2em; 
    font-weight: bold;
    height: 3em;
    width: 30em;
    background-color: #9cc4b4;
    border-radius: 6px;
    margin: 0.2em 0em 0em 0em;
    padding: 0;
    cursor: pointer; 
`

const AnswerOptions = ({answers, processAnswer}) => {

    // const correctCountry = answers.filter(answer => answer.isCorrect)[0]

    // const handleClick = (evt) => {
    //     processAnswer(evt.target.value, correctCountry)
    // }

    const listOfAnswerOptions = answers.map(answer => {
        return <AnswerOption onClick={() => {processAnswer(answer.isCorrect)}} key={answer.code}>{answer.name}</AnswerOption>
    })

    return(
        <AnswerBlock>
            {listOfAnswerOptions}
        </AnswerBlock>
    )

}

export default AnswerOptions