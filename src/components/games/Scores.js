import styled from "styled-components"

const ScoreContainer = styled.div`
    width: 15em;
    height: 7em;
    position: absolute;
    top: 9em;
    right: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5F898A;
    border-radius: 12px; 
    box-shadow: 0 6px 10px #4B5452;
`
const ScoreInfo = styled.h2`
    margin: 5px; 
    color: #ffff; 
    text-shadow: 2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000;
`

const Scores = ({scores}) => {

    return (
        <ScoreContainer>
            <ScoreInfo>Current Run: {scores.currentRun}</ScoreInfo>
            <ScoreInfo>Best Run: {scores.bestRun}</ScoreInfo>
        </ScoreContainer>
    )
}

export default Scores