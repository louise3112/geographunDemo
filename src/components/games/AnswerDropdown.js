import { useState, useEffect } from "react"
import styled from "styled-components"

const Form = styled.form`
    margin: 1em 0em 0em 0em;
    display: grid;
    grid-template-areas:
        'inputBox submitButton'
        'answerList .';
    align-items: center;
    column-gap: 1em;
`
const Input = styled.input`
    grid-area: inputBox;
    font-size: 1em;
    width: 18em;
    height: 1.5em;
    border-radius: 2px;
`
const SubmitButton = styled.input`
    grid-area: submitButton;
    font-size: 1em;
    width: 8em;
    height: 1.75em;
    cursor: pointer; 
    background-color: #F3DC65;
    border-radius: 6px;
    font-family: 'Oswald', sans-serif;
`
const AnswerList = styled.ul`
    grid-area: answerList;
    list-style: none;
    padding: 0;
    margin: 0;
`
const AnswerItem = styled.li`
    margin: 0.5em 0em 0em 1em;
    text-decoration: underline;
    color: rgb(70, 70, 70);
    cursor: pointer;
    &:hover {color: gold;}
`

const AnswerDropdown = ({allCountries, processGuess}) => {

    const [userGuess, setUserGuess] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect( () => {
        if (userGuess.length >= 2) {
            setFilteredCountries(allCountries.filter(country => {
                return country.name.toLowerCase().indexOf(userGuess.toLowerCase()) !== -1
            }))
        }
    }, [userGuess])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        processGuess(userGuess.toLowerCase())
    }

    const handleTextInput = (evt) => {setUserGuess(evt.target.value)}

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" value={userGuess} onChange={handleTextInput} />
            <SubmitButton type="submit" value="Submit guess!" />
            <AnswerList style={{display: userGuess.length > 0 ? "block" : "none"}}>
                {filteredCountries.map(country => {
                    return <AnswerItem onClick={() => setUserGuess(country.name)} key={country.code}>{country.name}</AnswerItem>
                })}
            </AnswerList>
        </Form>
    )
}

export default AnswerDropdown