/* eslint-disable react/no-unknown-property */
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="web-logo"
      />
    </Link>
    <div className="movie-item">
      <Popup
        trigger={
          <button
            type="button"
            className="menu-btn"
            testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
        modal
        nested
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-btn"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#616e7c" />
            </button>
            <ul className="page-links-container">
              <li>
                <Link to="/" className="page-link" onClick={() => close()}>
                  <AiFillHome className="logos" />
                  <h1 className="page-links">Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about" className="page-link" onClick={() => close()}>
                  <BsInfoCircleFill className="logos" />
                  <h1 className="page-links">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
