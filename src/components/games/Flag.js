import styled from "styled-components"

const Picture = styled.img`
    width: 25em;
    border: solid lightgrey;
    margin: 1em 0em 0em 0em;
`

const Flag = ({answer}) => {

    return (
        <>
            {answer.flag && <Picture src={answer.flag} />}
        </>
    )
}

export default Flag