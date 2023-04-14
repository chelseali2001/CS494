/** @jsxImportSource @emotion/react */

import { Global, css } from '@emotion/react'

const globalStyles = css`
    .error-container {
        padding: 10px;
        background-color: #ff7c7c;
        color: #fff;
    }
`

function ErrorContainer({ children }) {
    return (
        <>
            <Global styles={globalStyles} />
            <div className="error-container">{children}</div>
        </>
    )
}

export default ErrorContainer