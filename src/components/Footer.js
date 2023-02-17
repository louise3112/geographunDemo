import styled from "styled-components"

const FooterBox = styled.footer`
    padding: 0.8em;
    background-color: #3c3c3c;
`

const FooterText = styled.p`
    margin: 0;
    color: white;
    font-size: 1em;
    text-align: center;
`

const Footer = () => {
    return (
        <FooterBox>
            <FooterText>Based on geograPHUN © 2023</FooterText>
        </FooterBox>
    )
}

export default Footer;