import React from 'react'
import PropTypes from 'prop-types'

const Header = ({titulo}) => {
    return(
        <nav className="nav-wrapper light-blue darken-3">
            <h4 className="brand-logo center">{titulo}</h4>
        </nav>
    )
}

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}


export default Header