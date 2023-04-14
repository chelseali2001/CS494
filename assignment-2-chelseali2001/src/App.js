import React from 'react'
import {
    Routes,
    Route,
    NavLink,
    useParams,
    Outlet,
    Navigate
} from 'react-router-dom'

import './App.css'

import PeopleJSON from './data/people.json'
import PlanetsJSON from './data/planets.json'
import FilmsJSON from './data/films.json'

function NotFound() {
    return <h1>404: Page Not Found</h1>
}

function Home() {
    return <h1 className='data'>Home</h1>
}

function People() {
    if (Object.keys(PeopleJSON).length === 0) {
        return <h1>People</h1>
    } 

    return (
        <>
            <ul className='ulside'>
                {Object.keys(PeopleJSON).map((key, item) => ( 
                    <li key={key}><NavLink to={PeopleJSON[key].url} className="liaside">{PeopleJSON[key].name}</NavLink></li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}

function PeopleItem() {
    const { peopleItem } = useParams()
    const peopleItemData = PeopleJSON[peopleItem]

    return peopleItemData ? (
        <div className='data'>
            <h1>{peopleItemData.name}</h1>
            <div>
                <p>Height: {peopleItemData.height}</p>
                <p>Mass: {peopleItemData.mass}</p>
                <p>Hair Color: {peopleItemData.hair_color}</p>
                <p>Skin Color: {peopleItemData.skin_color}</p>
                <p>Eye Color: {peopleItemData.eye_color}</p>
                <p>Birth Year: {peopleItemData.birth_year}</p>
                <p>Gender: {peopleItemData.gender}</p>
                <ul className='main'>
                    <li>Home world: <NavLink to={peopleItemData.homeworld}>{peopleItemData.homeworld}</NavLink></li>
                </ul>
                <ul className='main'>
                    <p className='listtitle'>Films:</p>
                    {peopleItemData.films.map((key, item) => ( 
                        <li key={key}><NavLink to={key}>{key}</NavLink></li>
                    ))}
                </ul>
                <ul className='main'>
                    <li>URL: <NavLink to={peopleItemData.url}>{peopleItemData.url}</NavLink></li>
                </ul>
            </div>
        </div>
    ) : <NotFound />
}

function Planets() {
    if (Object.keys(PlanetsJSON).length === 0) {
        return <h1>Planets</h1>
    }

    return (
        <>
            <ul className='ulside'>
                {Object.keys(PlanetsJSON).map((key, item) => ( 
                    <li key={key}><NavLink to={PlanetsJSON[key].url} className="liaside">{PlanetsJSON[key].name}</NavLink></li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}

function PlanetsItem() {
    const { planetsItem } = useParams()
    const planetsItemData = PlanetsJSON[planetsItem]

    return planetsItemData ? (
        <div className='data'>
            <h1>{planetsItemData.name}</h1>
            <div>
                <p>Rotation Period: {planetsItemData.rotation_period}</p>
                <p>Orbital Period: {planetsItemData.orbital_period}</p>
                <p>Diameter: {planetsItemData.diameter}</p>
                <p>Climate: {planetsItemData.climate}</p>
                <p>Gravity: {planetsItemData.gravity}</p>
                <p>Terrain: {planetsItemData.terrain}</p>
                <p>Surface Water: {planetsItemData.surface_water}</p>
                <p>Population: {planetsItemData.population}</p>
                <ul className='main'>
                    <p className='listtitle'>Residents:</p>
                    {planetsItemData.residents.map((key, item) => ( 
                        <li key={key}><NavLink to={key}>{key}</NavLink></li>
                    ))}
                </ul>
                <ul className='main'>
                    <p className='listtitle'>Films:</p>
                    {planetsItemData.films.map((key, item) => ( 
                        <li key={key}><NavLink to={key}>{key}</NavLink></li>
                    ))}
                </ul>
                <ul className='main'>
                    <li>URL: <NavLink to={planetsItemData.url}>{planetsItemData.url}</NavLink></li>
                </ul>
            </div>
        </div>
    ) : <NotFound />
}

function Films() {
    if (Object.keys(FilmsJSON).length === 0) {
        return <h1>Films</h1>
    }

    return (
        <>
            <ul className='ulside'>
                {Object.keys(FilmsJSON).map((key, item) => ( 
                    <li key={key}><NavLink to={FilmsJSON[key].url} className="liaside">{FilmsJSON[key].title}</NavLink></li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}

function FilmsItem() {
    const { filmsItem } = useParams()
    const filmsItemData = FilmsJSON[filmsItem]

    return filmsItemData ? (
        <div className='data'>
            <h1>{filmsItemData.title}</h1>
            <div>
                <p>Episode ID: {filmsItemData.episode_id}</p>
                <p>Opening Crawl: {filmsItemData.opening_crawl}</p>
                <p>Director: {filmsItemData.director}</p>
                <p>Producer: {filmsItemData.producer}</p>
                <p>Release Date: {filmsItemData.release_date}</p>
                <ul className='main'>
                    <p className='listtitle'>Characters:</p>
                    {filmsItemData.characters.map((key, item) => ( 
                        <li key={key}><NavLink to={key}>{key}</NavLink></li>
                    ))}
                </ul>
                <ul className='main'>
                    <p className='listtitle'>Planets:</p>
                    {filmsItemData.planets.map((key, item) => ( 
                        <li key={key}><NavLink to={key}>{key}</NavLink></li>
                    ))}
                </ul>
                <ul className='main'>
                    <li>URL: <NavLink to={filmsItemData.url}>{filmsItemData.url}</NavLink></li>
                </ul>
            </div>
        </div>
    ) : <NotFound />
}

function App() {
    return (
        <>
            <ul className='ultop'>
                <li className='litop'><NavLink to="/" className='liatop'>Star Wars</NavLink></li>
                <li className='litop'><NavLink to="/people" className='liatop'>People</NavLink></li>
                <li className='litop'><NavLink to="/planets" className='liatop'>Planets</NavLink></li>
                <li className='litop'><NavLink to="/films" className='liatop'>Films</NavLink></li>
            </ul>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/people" element={<People />}>
                    <Route path=":peopleItem" element={<PeopleItem />} />
                </Route>
                <Route path="/planets" element={<Planets />}>
                    <Route path=":planetsItem" element={<PlanetsItem />} />
                </Route>
                <Route path="/films" element={<Films />}>
                    <Route path=":filmsItem" element={<FilmsItem />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
