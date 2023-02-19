import styled from "styled-components"

import tick from "../../images/tick.png"
import cross from "../../images/cross.png"

const FlagPic = styled.img`
    border: solid grey 1px;
    height: 6em;
`
const Card = styled.div`
    width: 11.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 1.5em 1em 1.5em 1em;
    border: groove #ADB5B5;
    border-radius: 20px;

    /* @media only screen and (max-width: 720px) {
        width: 150px;
        height: 250px;
        min-width: 150px;
        min-height: 250px;
    }  */
`
const Button = styled.button`
    background-color: #5F898A;
    color: black;
    &:hover {color: gold;}
    cursor: pointer;
    padding: 10px 25px;
    border-radius: 4px;
`
const EmptySpace = styled.div`
    flex-grow: 1;
`


const CardFront = ({country, processGame}) => {

    const handleClick = (evt) => {
        processGame(country, evt.target.value)
    }

    return (
        <Card>
            {country.status === "current" ? <Button onClick={handleClick} value="higher">HIGHER</Button> : <EmptySpace />}
            <h4>{country.name}</h4>
            <FlagPic src={country.flag} alt={"Flag for " + country.name}/>
            <p><b>Population:</b> {country.status === "current" ? "????" : country.population.toLocaleString()}</p>
            {country.status === "current" ? <Button onClick={handleClick} value="lower">LOWER</Button> : <EmptySpace />}
            {country.guessCorrect && <img src={tick} alt="a green circle with a tick" height={"50em"} width={"50em"}/>}
            {country.guessCorrect === false && <img src={cross} alt="a red circle with a cross" height={"50em"} width={"50em"}/>}
        </Card>
    )
}

export default CardFront