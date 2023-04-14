/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from '@emotion/styled/macro'

import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'
import useWeatherDataSearch from '../hooks/useWeatherDataSearch'

const TableStyle = styled.table`
    border: 1px solid;
    width: 100%;
    border-collapse: collapse;
`

const TableHeader = styled.thead`
    background-color: #555;
    color: #fff; 
`

const TableTh = styled.th`
    border: 1px solid;
`

const TableTd = styled.td`
    border: 1px solid;
`

function Search({ query }) {
    const [ searchParams, setSearchParams ] = useSearchParams()

    const [ inputQuery, setInputQuery ] = useState(searchParams.get("q") || "")

    const [ weatherData, loading, error ] = useWeatherDataSearch(searchParams.get("q"))

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <h2>Search query: {searchParams.get("q")}</h2>
            {error && <ErrorContainer>An error occurred...</ErrorContainer>}
            {loading ? <Spinner /> : (
                <TableStyle>
                    <TableHeader>
                    <tr>
                        <TableTh>Date/Time</TableTh>
                        <TableTh>Weather</TableTh>
                        <TableTh>Description</TableTh>
                    </tr>
                    </TableHeader>
                    <tbody>
                        {weatherData.map((weather, id) => (
                            <tr key={id}>
                                <TableTd>{weather.dt_txt}</TableTd>
                                <TableTd>
                                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].icon}/>
                                    <div>Max Temperature: {weather.main.temp_max}{'\u00b0'}F</div> 
                                    <div>Min Temperature: {weather.main.temp_min}{'\u00b0'}F</div>
                                    <div>Probability of Precipitation: {weather.pop}</div>
                                </TableTd>
                                <TableTd>{weather.weather[0].description}</TableTd>
                            </tr>
                        ))}
                    </tbody>
                </TableStyle>
            )}
        </div>
    )
}

export default Search