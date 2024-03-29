import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className="galleryCard">
      <h2 className="gallery-card1-text">{props.title}</h2>
      <div className="gallery-card1-container">
        <div className="gallery-card1-glow"></div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="gallery-card1-image"
        />
      </div>
    </div>
  )
}

GalleryCard1.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  rootClassName: '',
  title: 'Project Title',
  imageAlt: 'image',
}

GalleryCard1.propTypes = {
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default GalleryCard1
