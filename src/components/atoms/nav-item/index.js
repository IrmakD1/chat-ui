import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const NavItem = ({ text, route }) => {
    return (
        <Fragment>
            <Link className="nav-link" to={route}>
              {text}
            </Link>
        </Fragment>
    )
}

export default NavItem