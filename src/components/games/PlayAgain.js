import styled from "styled-components"

const Button = styled.button`
    font-family: 'Oswald', sans-serif;
    font-size: 1.2em; 
    font-weight: bold;
    height: 4em;
    width: 20em;
    background-color: #F3DC65;
    border-radius: 6px;
    margin: 1em;
    cursor: pointer; 
`

const PlayAgain = ({category, newGame}) => {

    return (
        <Button onClick={() => {newGame()}}>Next {category}</Button>
    )
}

export default PlayAgain