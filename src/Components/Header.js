import React from 'react'

const Header = ({titulo}) => {
    return(
        <nav className="nav-wrapper light-blue darken-3">
            <h4 className="brand-logo center">{titulo}</h4>
        </nav>
    )
}


export default Header