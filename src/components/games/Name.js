import styled from "styled-components"

const GameName = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5em;
    text-align: center;
    margin: 0.5em 0em 0em 0em;
`

const Name = ({text}) => {
    return (
        <GameName>{text}</GameName>
    )
}

export default Name