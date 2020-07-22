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
      <link rel="icon" href="/favicon.png" />
      {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/> */}
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:300,400,700%7CLato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7CFjalla+One:regular%7CAverage:regular"/>
    </Head>

    <Nav/>

    <div className="page-wrapper">
      <section className="full-section project-header" id="projects"></section>

      <section className="main-content">
        <ProjectCard
          project="Pulsar"
          description="A modern open source pipeline software for animatoin & VFX"
          img="pulsar-graph-editor.png"
          bgImg={false}
          imgFirst={true}
          technologies={["electron", "nextjs", "nodejs", "socketio", "python", "sass", "houdini", "maya", "nuke"]}
          links={[
            {
              link: "https://pulsarvfx.com",
              icon: "las la-link"
            },
            {
              link: "https://github.com/lgeertsen/Pulsar",
              icon: "lab la-github"
            }
          ]}
        />
        <ProjectCard
          project="Vyewer"
          description="Tool to review images and sequences with synchronised playback of multiple videos"
          img="pulsar-graph-editor.png"
          bgImg={true}
          imgFirst={false}
          technologies={["electron", "nextjs", "nodejs", "react"]}
          links={[
            {
              link: "https://github.com/lgeertsen/Vyewer",
              icon: "lab la-github"
            }
          ]}
        />
        <ProjectCard
          project="Magnet AR"
          description="Tool to animate cameras in 3D software (Maya, Houdini, Blender) with the use of AR on a mobile phone"
          img="pulsar-graph-editor.png"
          bgImg={false}
          imgFirst={true}
          technologies={["react-native", "viro-react", "maya", "houdini", "blender"]}
          links={[
            {
              link: "https://github.com/lgeertsen/MagnetAR",
              icon: "lab la-github"
            }
          ]}
        />
        <ProjectCard
          project="Arnold to Clarisse"
          description="Tool to review images and sequences with synchronised playback of multiple videos"
          img="pulsar-graph-editor.png"
          bgImg={true}
          imgFirst={false}
          technologies={["python", "maya", "clarisse"]}
          links={[
            {
              link: "https://github.com/lgeertsen/Arnold_to_Clarisse",
              icon: "lab la-github"
            }
          ]}
        />
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

      ::-webkit-scrollbar-track {
      	background-color: #F5F5F5;
      }

      ::-webkit-scrollbar {
      	width: 10px;
      	background-color: #F5F5F5;
      }

      ::-webkit-scrollbar-thumb {
      	background-color: #dfa25f;
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

      .white-text {
        color: #fff;
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
      .tuesday-night {
        font-family: 'Tuesday Night', 'Fjalla One', sans-serif;
        text-transform: none;
        font-weight: 400;
        color: #dfa25f;
        font-size: 120px;
        text-shadow: 1px 1px 2px #444;
      }
    `}</style>

    <style jsx>{`
      .project-header {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 10px solid #fff;
        overflow: hidden;
        height: 60%;
        background-color: rgb(233, 196, 186);
        // background-image: linear-gradient(180deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url("/denise-jans-ScQXxiIZ0Qo-unsplash.jpg");
        background-image: linear-gradient(180deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)), url("/octavian-dan-b21Ty33CqVs-unsplash.jpg");
        background-position: 100% 40%;
        // background-position: 50% 0px;
        background-size: cover;
        background-repeat: no-repeat;
        // background-attachment: fixed;
      }
    `}</style>
  </React.Fragment>
)}

export default Home
