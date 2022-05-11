import { useState } from 'react';
import Link from 'next/link'

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
  <div className={open ? "navigation-wrapper" : "navigation-wrapper closed"}>
    <div className="left-navigation">
    <Link href="/">
      <a className="brand">
      Lee  <span>G.</span>
      </a>
    </Link>
    <div className="hamburger-wrapper">
      <div className={open ? "hamburger-square cross" : "hamburger-square"} onClick={() => setOpen(!open)}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line line-bottom"></div>
      </div>
    </div>

    <div className="social-wrapper">
      <div className="icons-wrapper">
        <a href="https://www.linkedin.com/in/lgeertsen/" target="_blank" className="icon fa-stack">
          {/* <i className="fas fa-circle fa-stack-2x"></i>
          <i className="fab fa-github fa-stack-1x fa-inverse"></i> */}
          <i className="lab la-linkedin"></i>
        </a>
        <a href="https://github.com/lgeertsen" target="_blank" className="icon fa-stack">
          {/* <i className="fas fa-circle fa-stack-2x"></i>
          <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i> */}
          <i className="lab la-github"></i>
        </a>
        <a href="https://www.imdb.com/name/nm13132509/" target="_blank" className="icon fa-stack">
          {/* <i className="fas fa-circle fa-stack-2x"></i>
          <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i> */}
          <i className="lab la-imdb"></i>
        </a>
      </div>
    </div>
  </div>

  <div id="navigation-menu" className={open ? "open" : ""}>
    <Link href="/">
      <a className="nav-link">
        <h1 className="nav-text">HOME</h1>
        <div className="nav-line"></div>
      </a>
    </Link>
    <Link href="projects">
      <a className="nav-link">
      <h1 className="nav-text">PROJECTS</h1>
      <div className="nav-line"></div>
      </a>
    </Link>
    <a href="Resume_GEERTSEN_Lee_Pipeline_TD.pdf" className="nav-link" target="_blank">
      <h1 className="nav-text">RESUME</h1>
      <div className="nav-line"></div>
    </a>
    {/* <a href="contact.html" className="nav-link">
      <h1 className="nav-text">CONTACT</h1>
      <div className="nav-line"></div>
    </a> */}
  </div>

  <style jsx>{`
    .navigation-wrapper {
      position: fixed;
      left: 0%;
      top: 0%;
      right: auto;
      bottom: 0%;
      width: 400px;
      z-index: 9998;
      transition: all 0.6s ease;
    }

    .navigation-wrapper.closed {
      width: 90px;
    }

    .left-navigation {
      position: relative;
      left: 0%;
      top: 0%;
      right: auto;
      bottom: 0%;
      z-index: 2;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 90px;
      height: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      float: left;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      border-right: 1px solid #ededed;
      background-color: #fff;
    }

    .brand {
      position: relative;
      z-index: 2;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 90px;
      width: 200px;
      margin-top: 40px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      text-decoration: none;
      color: #dfa25f;
      font-family: 'Tuesday Night', 'Fjalla One', sans-serif;
      padding-top: 15px;
      font-size: 44px;
      transform: rotate(-90deg);
    }

    .brand span {
      padding-left: 30px;
    }

    .hamburger-wrapper {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
    }

    .hamburger-square {
      position: relative;
      top: 0px;
      right: 0px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 50px;
      height: 50px;
      margin-top: 0px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: transparent;
      cursor: pointer;
    }

    .hamburger-square .hamburger-line {
      position: absolute;
      width: 60%;
      height: 1px;
      background-color: #333;
      transform-style: preserve-3d;
      transform: translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transition: 0.4s all ease;
    }

    .hamburger-square .hamburger-line.line-bottom {
      transform: translate3d(0px, 6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    .hamburger-square.cross .hamburger-line {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
    }

    .hamburger-square.cross .hamburger-line.line-bottom {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
    }

    .icon {
      display: block;
      margin-bottom: 10px;
      font-size: 36px;
      color: #dfa25f;
      transition: 0.2s;
    }

    .icon:hover {
      color: #d99244;
    }

    #navigation-menu {
      position: fixed;
      left: -400px;
      top: 0%;
      bottom: auto;
      z-index: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 100%;
      width: 400px;
      margin-left: 90px;
      padding: 30px 180px 30px 90px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start;
      border-right: 1px solid #ededed;
      background-color: #fff;
      transition: 0.5s all ease;
    }

    #navigation-menu.open {
      left: 0;
    }

    .nav-link {
      position: relative;
      text-decoration: none;
      color: #333;
      transition: 0.3s all ease;
    }

    .nav-link:hover {
      color: #555;
    }

    .nav-text {
      position: relative;
      z-index: 3;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
    }

    .nav-line {
      position: absolute;
      z-index: 2;
      bottom: 12px;
      height: 12px;
      width: 0%;
      background-color: #dfa25f;
      transition: 0.3s all ease;
    }

    .nav-link:hover .nav-line {
      width: 110%;
    }
  `}</style>
</div>
)}

export default Nav
