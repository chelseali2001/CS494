/** @jsxImportSource @emotion/react */

import { Routes, Route, Navigate } from 'react-router-dom'
import { Global, css } from '@emotion/react'

import Search from './pages/Search'

const globalStyles = css`
    input, textarea {
        border: 1px solid #ababab;
        padding: 5px;
        font-size: 18px;
    }

    button {
        background-color: #2b7bbe;
        color: #fff;
        border: 2px solid #2b7bbe;
        border-radius: 3px;
        font-size: 18px;
        font-weight: 300;
        padding: 5px 10px;
        margin: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #71b5ed;
    }
`

function App() {
    return (
        <>
            <Global styles={globalStyles} />
            <Routes>
                <Route
                    path="/search"
                    element={<Search />}
                />
                <Route path="/" element={<Navigate to="/search" />} />
            </Routes>
        </>
    )
}

export default App