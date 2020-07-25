import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/Nav'


const Home = () => {

  useEffect(() => {
   console.log("%c ","padding-left:100%;padding-top:50%;background-size:cover;background-image:url('https://i.giphy.com/media/MM0Jrc8BHKx3y/giphy.webp')");
 });

  return (
  <React.Fragment>
    <Head>
      <title>Lee Geertsen</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.css"/>
      {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/> */}
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:300,400,700%7CLato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7CFjalla+One:regular%7CAverage:regular"/>
    </Head>

    <Nav/>

    <div className="page-wrapper">
      <section className="full-section home-section" id="home"></section>

      <h1 id="top-title"><span className="tuesday-night">Lee <span className="offset">Geertsen</span></span><br/>Pipeline TD</h1>

      <section className="full-page" id="hello">
        <div className="full-page w-container wide-container">
          <div className="half-p">I'm a last year VFX &amp; Game Programming student at <a href="https://artfx.school/en/technical-director-visual-effetcs-video-games-programming/" target="_blank" className="stylish-link">ArtFx</a> with a <em>passion for coding &amp; cocktails</em></div>
        </div>
      </section>

      <section className="main-content">

        <section className="full-section" id="projects-container">
          <div className="frame"></div>
          <div className="main-page-container">
            <div className="main-page-column">
              <h1>Resume</h1>
              <a href="Resume_GEERTSEN_Lee_Pipeline_TD.pdf" target="__blank" className="projects-image-link">
                <img src="Resume_img.png"/>
              </a>
              <a href="Resume_GEERTSEN_Lee_Pipeline_TD.pdf" target="__blank" className="projects-btn-container">
                <div className="btn">OPEN RESUME</div>
              </a>
            </div>
            <div className="main-page-column">
              <h1>Projects</h1>
              <img src="pulsar-graph-editor.png"/>
              <div className="projects-btn-container">
                <Link href="projects">
                  <div className="btn">SEE ALL PROJECTS</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="border-section"></section>

        <section className="" id="contact-section">
          <div className="container" id="contact-container">
            <div className="cocktail-card">
              <div className="post-card-content">
                <h2 className="cocktail-subtitle">My Favorite Cocktail</h2>
                <h1 className="cocktail-title white-text">The Aviation</h1>
                <div className="divider divider-white"></div>
                <div className="columns is-mobile">
                  <div className="column is-two-fifths has-text-right">1.5 oz</div>
                  <div className="column has-text-left">Gin</div>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-two-fifths has-text-right">1 tsp</div>
                  <div className="column has-text-left">Crème De Violette</div>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-two-fifths has-text-right">1/2 oz</div>
                  <div className="column has-text-left">Maraschino Liqueur</div>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-two-fifths has-text-right">3/4 oz</div>
                  <div className="column has-text-left">Lemon Juice</div>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-two-fifths has-text-right">1/4 oz</div>
                  <div className="column has-text-left">Simple Syrup</div>
                </div>
              </div>
              <div className="frame"></div>
            </div>
            <div className="contact-card">
              <div className="post-card-content">
                <h1 className="contact-title">Get In Touch</h1>
                <div className="divider"></div>
                <div className="columns is-8-widescreen is-desktop is-centered-mobile">
                  <div className="column is-8-widescreen">
                    <div className="contact-info grey-text"><i className="las la-user-alt"></i>Lee Geertsen</div>
                    <div className="contact-info grey-text"><i className="las la-map-marker"></i>Montpellier, France</div>
                    <div className="contact-info grey-text"><i className="las la-phone"></i>+33 (0) 7 71 76 38 62</div>
                  </div>
                  <div className="column is-8-widescreen">
                    <div className="contact-info grey-text">
                      <a className="stylish-link" href="mailto:lgeertsen@artfx.fr">
                        <i className="las la-envelope"></i>lgeertsen@artfx.fr
                      </a>
                    </div>
                    <div className="contact-info grey-text">
                      <a className="stylish-link" href="https://www.linkedin.com/in/lgeertsen/" target="_blank" >
                        <i className="lab la-linkedin"></i>@lgeertsen
                      </a>
                    </div>
                    <div className="contact-info grey-text">
                      <a className="stylish-link" href="https://github.com/lgeertsen" target="_blank">
                        <i className="lab la-github"></i>lgeertsen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame frame-grey"></div>
            </div>
          </div>
        </section>

      </section>
    </div>

    <style jsx>{`
      .home-section {
        border: 10px solid #fff;
        overflow: hidden;
        height: 67%;
        background-color: rgb(233, 196, 186);
        background-image: linear-gradient(180deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url("/denise-jans-ScQXxiIZ0Qo-unsplash.jpg");
        // background-image: linear-gradient(180deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url("/patrick-ryan-703015-unsplash.jpg");
        background-position: 50% 100%;
        // background-position: 50% 0px;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }

      #top-title {
        position: fixed;
        right: 13.5%;
        bottom: 28.5%;
        display: inline-block;
        margin-top: 0px;
        margin-bottom: 0px;
        font-family: 'Fjalla One', sans-serif;
        font-size: 120px;
        line-height: 150px;
        font-weight: 700;
        /* font-weight: 400; */
        text-align: left;
        text-transform: uppercase;
        color: #333;
      }

      .tuesday-night {
        font-family: 'Tuesday Night', 'Fjalla One', sans-serif;
        text-transform: none;
        font-weight: 400;
        color: #dfa25f;
        font-size: 120px;
        text-shadow: 1px 1px 2px #444;
      }

      #top-title .offset {
        margin-left: 50px;
      }

      .main-content {
        position: relative;
        z-index: 1;
        height: 100%;
      }

      #projects-container {
        display: flex;
        flex-direction: column;
        /* border: 10px solid #fff; */
        background-color: #eee;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url("https://images.unsplash.com/photo-1532264523420-881a47db012d");
        // background-image: linear-gradient(180deg, rgba(255, 255, 255, .3), rgba(255, 255, 255, .3)), url("https://images.unsplash.com/photo-1488229297570-58520851e868");
        background-position: 50% 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding-bottom: 50px;
      }

      #projects-container h1 {
        margin: 0;
        padding-top: 0px;
        margin-bottom: 50px;
        font-family: 'Fjalla One', sans-serif;
        font-size: 120px;
        line-height: 130px;
        /* font-weight: 700; */
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
      }

      .projects-container {
        flex: 1;
        display: flex;
        flex-direction: row;
        margin: 0 50px;
        margin-top: 20px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      .projects-btn-container {
        position: relative;
        display: flex
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }

      .main-page-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
      }
      .main-page-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .main-page-column > .projects-image-link,
      .main-page-column > img {
        position: relative;
        z-index: 5;
        width: 80%;
        margin-bottom: 50px;
      }
      .main-page-column > a > img {
        width: 100%;
      }

      #border-section {
        height: 100px;
        background-color: #eee;
        background-image: url("bg_pattern.jpg");
        background-repeat: repeat;
        background-size: 16px;
      }

      #contact-section {
        padding-top: 80px;
        padding-bottom: 80px;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("david-pennington-653277-unsplash.jpg");
        background-position: 0px 0px, 50% 50%;
        background-size: auto, cover;
        background-repeat: repeat, no-repeat;
        background-attachment: scroll, fixed;
        color: #fff;
      }

      #contact-container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .cocktail-card,
      .contact-card {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .12);
        color: #111;
        text-decoration: none;
        padding: 48px 8%;
        align-items: center;
      }

      .cocktail-card {
        flex: 1;
        margin-right: 20px;
        background-color: #dfa25f;
        color: #fff;
        padding: 48px 2%;
      }

      .post-card-content {
        position: relative;
        z-index: 1;
        display: flex;
        width: 100%;
        padding-top: 8px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .cocktail-subtitle,
      .contact-title {
        text-align: center;
        font-family: "Oswald", sans-serif;
        font-size: 20px;
        margin-bottom: 5px;
      }

      .contact-title {
        font-size: 42px;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .cocktail-title {
        text-align: center;
        font-family: 'Tuesday Night', 'Fjalla One', sans-serif;
        text-transform: none;
        font-weight: 400;
        font-size: 54px;
        line-height: 70px;
        text-shadow: 1px 1px 2px #444;
      }

      .cocktail-card .columns {
        width: 90%;
        margin-bottom: 0;
      }

      .contact-card {
        flex: 2;
      }

      .contact-card .columns {
        width: 80%;
        text-align: left;
        margin-top: 15px;
      }

      .contact-card .contact-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 20px;
        margin-bottom: 5px;
      }

      .contact-card i {
        margin-right: 10px;
        font-size: 28px;
        color: #444;
      }

      .contact-card .stylish-link {
        position: relative;
        font-weight: 400;
      }

      .contact-card .stylish-link i {
        position: relative;
        bottom: -3px;
      }

      @media (max-width: 1500px) {
        #top-title {
          right: 8%;
        }
      }
      @media (max-width: 1300px) {
        #top-title {
          font-size: 100px;
          line-height: 120px;
        }
        #top-title .tuesday-night {
          font-size: 100px;
          line-height: 120px;
        }
        .half-p {
          font-size: 36px;
          line-height: 46px;
          min-width: 400px;
        }
      }
      @media (max-width: 1100px) {
        #home {
          height: 50%;
        }
        #top-title {
          position: absolute;
          bottom: 47%;
        }
        #hello {
          height: 60%;
        }
        .half-p {
          max-width: 75%;
          padding: 0 50px;
          height: 80%;
        }
        #projects-container h1 {
          font-size: 80px;
          line-height: 90px;
        }
        #contact-container {
          flex-direction: column;
        }
        .cocktail-card,
        .contact-card {
          width: 60%;
          margin: 0;
        }
        .cocktail-card {
          margin-bottom: 25px;
        }
        .contact-card {
          padding: 2%;
        }
      }
      @media (max-width: 800px) {
        #top-title {
          font-size: 80px;
          line-height: 100px;
        }
        #top-title .tuesday-night {
          font-size: 80px;
          line-height: 100px;
        }
        .half-p {
          font-size: 28px;
          line-height: 38px;
          max-width: 100%;
        }
        #projects-container h1 {
          font-size: 60px;
          line-height: 70px;
        }
        .cocktail-card,
        .contact-card {
          width: 90%;
        }
      }
      @media (max-width: 650px) {
        #home {
          height: 30%;
        }
        #top-title {
          position: absolute;
          bottom: 68%;
        }
        #top-title {
          font-size: 60px;
          line-height: 80px;
        }
        #top-title .tuesday-night {
          font-size: 60px;
          line-height: 80px;
        }
        .half-p {
          font-size: 20px;
          line-height: 30px;
          max-width: 100%;
          min-width: 100px;
        }
        #hello {
          height: 40%;
        }
        #projects-container {
          height: auto;
          padding-bottom: 130px;
        }
        .main-page-container {
          flex-direction: column;
        }
        .main-page-column {
          margin: 40px 0;
        }
        #projects-container h1,
        #projects-container img,
        #projects-container a {
          margin-bottom: 25px;
        }
      }
      @media (max-width: 500px) {
        #top-title {
          font-size: 40px;
          line-height: 60px;
        }
        #top-title .tuesday-night {
          font-size: 40px;
          line-height: 60px;
        }
        #top-title .tuesday-night span {
          margin-left: 15px;
        }
        .half-p {
          font-size: 14px;
          line-height: 20px;
          max-width: 100%;
          min-width: 100px;
        }

        #projects-container {
          height: auto;
          padding-bottom: 200px;
        }
        #projects-container h1 {
          font-size: 48px;
        }
        .cocktail-title {
          font-size: 44px;
        }
        .cocktail-card {
          padding: 5px 12px;
          font-size: 14px;
        }
        .contact-card .columns {
          width: 95%;
        }
        .contact-card .contact-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .contact-title {
          line-height: 40px;
        }
        .contact-card i {
          margin-right: 10px;
          font-size: 24px;
          color: #444;
        }
      }
    `}</style>
  </React.Fragment>
)}

export default Home
