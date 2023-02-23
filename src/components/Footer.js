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

const TextLink = styled.a`
    color: white;
`

const Footer = () => {
    return (
        <FooterBox>
            <FooterText><b>Please note</b> this is a front end demo of <TextLink href="https://github.com/louise3112/geograPHUN" target="_blank">geograPHUN</TextLink>© <b>only</b> and so scores are <b>not</b> retained if you change or refresh pages!</FooterText>
        </FooterBox>
    )
}

export default Footer;