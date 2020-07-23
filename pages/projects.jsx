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
          description="A modern open source pipeline software for animation & VFX"
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

      @media (max-width: 800px) {
        .project-header {
          height: 40%;
        }
      }

      @media (max-width: 600px) {
        .project-header {
          height: 20%;
        }
      }
    `}</style>
  </React.Fragment>
)}

export default Home
