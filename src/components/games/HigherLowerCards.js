import playingCard from "../../images/playingCard.png"
import CardFront from "./CardFront"

import styled from "styled-components"

const ListOfCountryCards = styled.ul`
    margin: 2em 1em 2em 1em;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    column-gap: 0.5em;
`
const CardBack = styled.img`
    width: 14em;
`

const HigherLowerCards = ({answers, processGame}) => {

    const listOfCards = answers.map(country => {
        if (country.status === "none") {
            return <CardBack src={playingCard} alt='Playing Card' key={country.code} />
        } else {
            return <CardFront key={country.code} country={country} processGame={processGame}/>
        }
    })

    return (
        <ListOfCountryCards>
            {listOfCards}
        </ListOfCountryCards>
    )
}

export default HigherLowerCards