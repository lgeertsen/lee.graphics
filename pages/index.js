import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'

const Home = () => {

  useEffect(() => {
   console.log("%c ","padding-left:100%;padding-top:50%;background-size:cover;background-image:url('https://i.giphy.com/media/MM0Jrc8BHKx3y/giphy.webp')");
 });

  return (
  <React.Fragment>
    <Head>
      <title>Lee Geertsen</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
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
          <h1>Projects</h1>
          <div className="projects-container">
            <ProjectCard
              project="Pulsar"
              description="Open source Pipeline"
            />
            <ProjectCard
              project="Vyewer"
              description="Open source Pipeline"
            />
            <ProjectCard
              project="Magnetar"
              description="Open source Pipeline"
            />
          </div>
          <div className="projects-btn-container">
            <div className="btn">SEE ALL PROJECTS</div>
          </div>
        </section>


      </section>
    </div>

    <style jsx global>{`
      @font-face {
        font-family: "Tuesday Night";
        src: url("/TuesdayNight/TuesdayNight-Regular.otf");
      }

      html,
      body,
      #__next,
      body-container {
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: Average, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        color: #333352;
        font-size: 16px;
        line-height: 22px;
      }

      * {
        box-sizing: border-box;
      }

      ::selection {
        background: #dfa25f;
        color: #fff;
      }

      .page-wrapper {
        padding-left: 90px;
        height: 100%;
      }

      .full-section {
        position: relative;
        height: 100%;
        background-color: #fff;
      }

      .full-page {
        position: relative;
        overflow: hidden;
        height: 100%;
      }

      .w-container {
        margin-left: auto;
        margin-right: auto;
        max-width: 940px;
      }

      .wide-container {
        position: relative;
        display: block;
        max-width: 1224px;
        margin-right: auto;
        margin-left: auto;
      }

      .half-p {
        position: absolute;
        top: 24%;
        max-width: 45%;
        min-width: 500px;
        background: #fff;
        margin-left: -10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: #d1d1d1;
        font-size: 46px;
        line-height: 58px;
        text-shadow: 1px 1px 0 #fff;
      }

      .stylish-link {
        color: #a4a4a4;
        text-decoration: underline;
        text-decoration-style: dotted;
        font-weight: 800;
      }

      .frame {
        z-index: 1;
        position: absolute;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        left: 10px;
        top: 10px;
        border: 1px solid #fff;
        color: transparent;
      }

      .frame-grey {
        border-color: #e3e3e3;
      }

      .frame.frame-yellow {
        border-color: #dfa25f;
      }

      .divider {
        width: 90px;
        height: 4px;
        margin-top: 8px;
        margin-bottom: 8px;
        border-top: 1px solid #dfa25f;
        border-bottom: 1px solid #dfa25f;
      }

      .grey-text {
        color: #a4a4a4;
      }

      .btn {
        position: relative;
        z-index: 5;
        padding: 10px 20px;
        background: transparent;
        color: #fff;
        border-radius: 3px;
        font-family: "Oswald", sans-serif;
        border: 1px solid #dfa25f;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s;
      }
      .btn:hover {
        background: #dfa25f;
      }
    `}</style>

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

      #top-title .tuesday-night {
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
        padding-top: 50px;
        margin-bottom: 0px;
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
      }
    `}</style>
  </React.Fragment>
)}

export default Home
