/** @jsxImportSource @emotion/react */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Global, css } from '@emotion/react'

import App from './App'

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap');
    body {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 300;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Global styles={globalStyles} />
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </>
)