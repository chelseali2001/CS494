/*
 * Spinner derived from https://tobiasahlin.com/spinkit/.
 */

/** @jsxImportSource @emotion/react */

import { Global, css } from '@emotion/react'

const globalStyles = css`
    .spinner {
        display: inline-block;
        text-align: center;
    }

    @keyframes bounce-delay {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1.0);
        }
    }

    .spinner .dot {
        display: inline-block;
        border-radius: 100%;
        width: 12px;
        height: 12px;
        margin: 6px; /* (width / 2) or (height / 2) */
        background-color: #333;
        animation: bounce-delay infinite 1.4s ease-in-out both;
    }

    .spinner .dot:nth-of-type(1) {
        animation-delay: -0.32s;
    }

    .spinner .dot:nth-of-type(2) {
        animation-delay: -0.16s;
    }
`

function Spinner() {
    return (
        <>
            <Global styles={globalStyles} />
            <div className="spinner">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
        </>
    )
}

export default Spinner