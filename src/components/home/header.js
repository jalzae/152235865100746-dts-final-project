
//image
import logo from '../../assets/cozastore/images/icons/logo-01.png'

//components
import Nav from './nav';

//funct
import { useState } from 'react'

const Header = (props) => {
  const [menuState, setMenu] = useState(false);

  const displayMenu = {
    display: "block",
  };


  const hideMenu = {
    display: "none",
  };

  return (<header>
    <div className="container-menu-desktop">
      <div className="top-bar">
        <div className="content-topbar flex-sb-m h-full container">
          <div className="left-top-bar flex-w h-full">
          </div>

          <div className="right-top-bar flex-w h-full">
            <a href="#" className="flex-c-m trans-04 p-lr-25">
              Documentation
            </a>
          </div>
        </div>
      </div>

      <div className="wrap-menu-desktop">
        <nav className="limiter-menu-desktop container">

          <a href="#" className="logo">
            <img src={logo} alt="IMG-LOGO" />
          </a>

          <div className="menu-desktop">
            <ul className="main-menu">
              <Nav changeMenu={props.changeMenu}></Nav>
            </ul>
          </div>

          <div className="wrap-icon-header flex-w flex-r-m">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div onClick={() => props.changeStateLogin()} className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-account"></i>
            </div>

            <div style={hideMenu} className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <a style={hideMenu} href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
              <i className="zmdi zmdi-favorite-outline"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>


    <div className="wrap-header-mobile">

      <div className="logo-mobile">
        <a href="#"><img src={logo} alt="IMG-LOGO" /></a>
      </div>


      <div className="wrap-icon-header flex-w flex-r-m m-r-15">
        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
          <i className="zmdi zmdi-search"></i>
        </div>

        <div onClick={() => props.changeStateLogin()} className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
          <i className="zmdi zmdi-account"></i>
        </div>

        <div style={hideMenu} className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
          <i className="zmdi zmdi-shopping-cart"></i>
        </div>

        <a style={hideMenu} href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
          <i className="zmdi zmdi-favorite-outline"></i>
        </a>

        <a onClick={() => setMenu(!menuState)} href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10" >
          {
            (menuState == false) ? <i className="zmdi zmdi-menu"></i> : <i className="zmdi zmdi-close"></i>
          }
        </a>
      </div>


      <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>
    </div>



    <div className="menu-mobile" style={(menuState == false) ? hideMenu : displayMenu}>


      <ul className="main-menu-m">
        <Nav changeMenu={props.changeMenu}></Nav>
      </ul>
    </div>


    <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
      <div className="container-search-header">
        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
          <img src="images/icons/icon-close2.png" alt="CLOSE" />
        </button>

        <form className="wrap-search-header flex-w p-l-15">
          <button className="flex-c-m trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
          <input className="plh3" type="text" name="search" placeholder="Search..." />
        </form>
      </div>
    </div>
  </header >)
}

export default Header;