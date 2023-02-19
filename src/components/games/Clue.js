import styled from "styled-components"

const Picture = styled.img`
    height: 15em;
    border: solid lightgrey;
    margin: 1em 0em 0em 0em;
`
const Text = styled.h3`
    width: 24em;
    padding: 0.5em 0em 0.5em 0em;
    margin: 1em 0em 0em 0em;
    border: solid lightgrey;
    text-align: center;
`

const Clue = ({gameInfo, answer}) => {

    return (
        <>
            {gameInfo.category === "flag" 
                ? <Picture src={answer.flag} />
                : <Picture src={gameInfo.image}/>}

            {gameInfo.category !== "flag" && <Text>{answer[gameInfo.category]}</Text>}
        </>
    )
}

export default Clue