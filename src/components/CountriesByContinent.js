import { Link } from "react-router-dom"
import styled from "styled-components"

const ContinentHeader = styled.h2`
    margin: 0;
`
const ListPerContinent = styled.ul`
    padding: 0;
`
const Item = styled.li`
    margin: 0.5em 0em 0em 0em;
    list-style: none; 
`
const CountryLink = styled(Link)`
    color: rgb(70, 70, 70);
    cursor: pointer;
    &:hover {color: gold;}
`

const CountriesByContinent = ({continent, countries}) => {

    const sortedCountries = countries.sort((x, y) => (x.name > y.name) ? 1 : -1)

    const countryLinks = sortedCountries.map((country) => {
        return <Item key={country.code}><CountryLink to={"/countries/" + country.name}> {country.name}</CountryLink></Item>
    })

    return (
        <div>
            <ContinentHeader>{continent}</ContinentHeader>
            <ListPerContinent> 
                {countryLinks}
            </ListPerContinent>
        </div>
    )
}

export default CountriesByContinent