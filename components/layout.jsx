import React from 'react';
import Head from 'next/head';

import Nav from './Nav'

export default ({ children }) => {

  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="ArtFX Student Manager"
        />
        <meta property="og:title" content="Next.js + MongoDB App" />
        <meta
          property="og:description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
        />
      </Head>

      <Nav/>

      {children}
      {/* <footer> */}
        {/* <p>
          Made with
          {' '}
          <span role="img" aria-label="Love">
            ❤️
          </span>
          ,
          {' '}
          <span role="img" aria-label="Fire">
            🔥
          </span>
          , and a keyboard by
          {' '}
          <a href="https://hoangvvo.com/">Hoang Vo</a>
          .
        </p>
        <p>
          Source code is on
          {' '}
          <a href="https://github.com/hoangvvo/nextjs-mongodb-app">Github</a>
          .
        </p> */}
      {/* </footer> */}
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

        h1 {
          font-size: 2em;
          font-weight: bold;
          line-height: 22px;
          margin: 21px 0;
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

        .divider.divider-white {
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
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
    </>
  );
};
