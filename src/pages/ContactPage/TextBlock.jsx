import React from 'react'

const TextBlock = ({css,children,head}) => {
    return (
        <div style={css}>
            <h1 style={{ "color": "var(--pure)", "fontSize": "1.3rem" }}>{head}</h1>
            <ul style={{ "listStyleType": "none","width":"10rem" }}>
                {children}
            </ul>
        </div>
    )
}

export default TextBlock