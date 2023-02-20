import { useState, useEffect } from "react"

import CountriesByContinent from "../components/CountriesByContinent"

import styled from "styled-components"

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 1.5em;
`
const Header = styled.h4`
    font-size: 2em;
    margin: 0.5em 0em 0em 0em;
`
const SearchForm = styled.form`
    display: flex;
    column-gap: 0.8em;
    align-items: center;
`
const SearchLabel = styled.label`
    font-size: 1.2em;
    font-weight: bold;
`
const SearchInput = styled.input`
    width: 40em;
    height: 1.5em;
    font-size: 1.2em;
`
const ListByContinent = styled.ul`
    margin: 0em 0em 1em 0em;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    column-gap: 3em;
    width: 90%;
`

const Countries = () => {

    const [allCountries, setAllCountries] = useState([])
    const [allContinents, setAllContinents] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect( () => {
        getData()
    }, [])

    const getData = () => {
        fetch ("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => res.filter(country => country.unMember))
            .then(res => {
                return res.map(country => ({
                    name: country.name.common,
                    code: country.cca3,
                    flag: country.flags.svg,
                    population: country.population,
                    language: Object.values(country.languages), //array
                    capital: country.capital[0],
                    region: country.region,
                    subregion: country.subregion,
                    latitude: country.latlng[0],
                    longitude: country.latlng[1],
                    maps: country.maps.googleMaps,
                    timezones: country.timezones, //array
                    continents: country.continents, // array
                    currencies: Object.values(country.currencies), // array
                    landlocked: country.landlocked,// boolean
                    borders: country.borders // array
                }))
            })
            .then(res => {
                setAllCountries(res)
                const allContinentsDuplicates = res.map(country => country.continents).flat(1)
                const allContinentsUnique = [... new Set(allContinentsDuplicates)]
                setAllContinents(allContinentsUnique)
            })
    }

    const handleChange =function(evt) {
        setSearchText(evt.target.value)
    }

    const searchedCountries = (allCountries, searchText) => {
        return allCountries.filter((country) => country.name.toLowerCase().includes(searchText.toLowerCase()))
    }

    const countriesByContinent = allContinents.map(continent => {
        const countriesForContinent = searchedCountries(allCountries, searchText).filter(country => country.continents.includes(continent))
        if (countriesForContinent.length > 0) {
            return <CountriesByContinent continent={continent} countries= {countriesForContinent} key={continent}/>
        }
    })

    return (
        <Container>
            <Header>Countries by Continent</Header>
            <SearchForm>
                <SearchLabel>Search countries:</SearchLabel>
                <SearchInput label="Search" value={searchText} onChange={handleChange}/>
            </SearchForm>
            <ListByContinent>
                {countriesByContinent}
            </ListByContinent>
        </Container>
    )
}

export default Countries