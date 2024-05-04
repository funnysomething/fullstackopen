import {useState} from 'react'

const Countries = ({countries, filter}) => {
    if (countries === null){
        return null
    }
    const fcountries = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (fcountries.length > 10){
        return <div>Too many matches, specify another filter</div>
    } 

    return (
        <div>
            {fcountries
                .map(country => <Country country={country} key = {country.name.common}/>)}
        </div>
    )
}

const Country = ({country}) => {
    const [full, setFull] = useState(false)
    return ( full ? 
            <CountryInfo country = {country} /> : 
            <p>{country.name.common} <button onClick={() => setFull(true)}>Show</button> </p> )
}

const CountryInfo = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(l => <li key = {l}>{l}</li>)}
            </ul>
            <img src = {country.flags.png} alt = {country.flags.alt}/>
        </div>
    )
}

export default Countries