import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div id="lightbar2" className="footer-light-strip lightStrip"></div>
      <div className="footer-container">
        <div className="footer-moheganpalogolockup1">
          <a
            href={props.linkImage}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <img
              alt="Moheganpacasino.com Logo and Mohegan Pennsylvania logo"
              src={props.imageSrc}
              className="footer-image"
            />
          </a>
        </div>
        <div className="footer-social">
          <a
            href={props.linkContainer}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link1"
          >
            <div className="footer-container1">
              <img
                alt="Instagram logo"
                src={props.sVG03svgsocialinstagramblueSrc}
                className="footer-svg03svgsocialinstagramblue"
              />
            </div>
          </a>
          <a
            href={props.linkContainer1}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link2"
          >
            <div className="footer-container2">
              <img
                alt="Facebook Logo"
                src={props.sVG03svgsocialfacebookblueSrc}
                className="footer-svg03svgsocialfacebookblue"
              />
            </div>
          </a>
        </div>
      </div>
      <Link to="/terms-of-use" className="footer-text">
        <span className="footer-text1">TERMS OF USE</span>
        <br className=""></br>
      </Link>
      <p className="legal">
        <span className="">
          If you or someone you know has a gambling problem, help is available.
          Call 1-800-GAMBLER.
        </span>
        <br className=""></br>
      </p>
      <span className="footer-text6">
        <span className="">
          Copyright © 2024 Mohegan Sun, Inc. All rights Reserved
        </span>
      </span>
    </footer>
  )
}

Footer.defaultProps = {
  imageSrc: '/external/2023palogo4cwt-200h.webp',
  sVG03svgsocialfacebookblueSrc:
    '/external/svg03svgsocialfacebookblue4229-mvr9.svg',
  linkContainer: 'https://www.instagram.com/moheganpa/',
  sVG03svgsocialinstagramblueSrc:
    '/external/svg03svgsocialinstagramblue4229-dzu.svg',
  sVG03svgsocialinstagramblueAlt: 'SVG03svgsocialinstagramblue4229',
  rootClassName: '',
  linkContainer1: 'https://www.facebook.com/moheganpa',
  sVG03svgsocialfacebookblueAlt: 'SVG03svgsocialfacebookblue4229',
  imageAlt: 'image',
  linkImage: 'https://moheganpacasino.com',
}

Footer.propTypes = {
  imageSrc: PropTypes.string,
  sVG03svgsocialfacebookblueSrc: PropTypes.string,
  linkContainer: PropTypes.string,
  sVG03svgsocialinstagramblueSrc: PropTypes.string,
  sVG03svgsocialinstagramblueAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  linkContainer1: PropTypes.string,
  sVG03svgsocialfacebookblueAlt: PropTypes.string,
  imageAlt: PropTypes.string,
  linkImage: PropTypes.string,
}

export default Footer
