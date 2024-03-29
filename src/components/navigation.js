import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <nav id="nav" className="navigation-navigation navigation">
      <div className="navigation-mohegan-pa-logo">
        <Link to="/" className="navigation-navlink">
          <img
            id="navLogo"
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navigation-image"
          />
        </Link>
      </div>
    </nav>
  )
}

Navigation.defaultProps = {
  imageSrc: '/external/2023palogo4cwt-200h.webp',
  imageAlt: 'image',
}

Navigation.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigation
