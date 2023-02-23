import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    border: solid lightgrey; 
    border-radius: 20px; 
    width: 30em;  
    padding: 2em 1em; 
    background-color: #96bcb4;
`
const Flag = styled.img`
    height: 8em;
    width: auto;
    border: solid grey; 
`
const CountryInfo = styled.div`
    text-align: center;
`
const CountryInfoTitle = styled.h4`
    font-size: 1.5em;
    margin: 0.8em; 
`

const CountryDetails = () => {

    const { name } = useParams()
    const [country, setCountry] = useState({})

    useEffect(() => {
        getData(name)
    },[])

    const getData = (name) => {
        fetch ("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => res.filter(country => country.name.common === name))
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
            .then(res => setCountry(res[0]))
    }

    const joinStringNestedObject = (objectValues) => {
        return objectValues ? Object.values(objectValues).map(currency => currency.name).join(", ") : ""
    }

    return (
        <Container>
            {country.flag && <Flag src={country.flag} />}
            <CountryInfoTitle>{country.name}</CountryInfoTitle>
            <CountryInfo>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Subregion:</strong> {country.subregion}</p>
                <p><strong>Languages:</strong> {country.language.join(", ")}</p>
                <p><strong>Currency:</strong> {joinStringNestedObject(country.currencies)}</p>
                {country.population && <p><strong>Population:</strong> {country.population.toLocaleString()}</p> }  
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Latitude / Longitude:</strong> {Math.round(country.latitude) + " / " + Math.round(country.longitude)}</p>
            </CountryInfo>
        </Container>
    )
}

export default CountryDetails
