import React, { useState } from 'react';

const ProjectCard = ({ project, description, img, bgImg, imgFirst, technologies, links }) => {


    return (
      <section className={bgImg ? "full-section bg-img" : "full-section"}>
        {bgImg ?
          <div className={bgImg ? "frame" : "frame frame-yellow"}></div>
          : ''
        }
        <h1 className={bgImg ? "project-title white-text" : "project-title"}>{project}</h1>
        <div className="project-card">
          <div className="project-card-image">
            <img src={img}/>
          </div>
          <div className="project-card-info">
            <div className="frame frame-grey"></div>
            <div className="project-card-content">
              <div className="project-card-top">
                <h2 className="title">{project}</h2>
                <div className="divider"></div>
                <p className="grey-text">{description}</p>
              </div>
              <div className="project-card-bottom">
                <div className="project-card-technologies">
                  {technologies.map((techno, index) => (
                    <img key={index} className="project-card-techno" src={`${techno}.png`} alt={techno}/>
                  ))}
                </div>
                <div className="project-card-links">
                  {links.map((link, index) => (
                    <div key={index} className="project-link-container">
                      <div>
                        <a key={index} className="project-link" href={link.link} target="__blank">
                            <i className={link.icon}></i>
                        </a>
                      </div>
                      <div>
                        <a className="project-link" href={link.link} target="__blank">
                          <h6>{link.link}</h6>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .full-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #fafafa;
            background-image: url("bg_pattern.jpg");
            background-repeat: repeat;
            background-size: 16px;
          }

          .full-section.bg-img {
            background-color: #eee;
            background-image: linear-gradient(180deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url("rene-bohmer-YeUVDKZWSZ4-unsplash.jpg");
            background-position: 50% 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
          }

          .project-title {
            font-family: 'Tuesday Night', 'Fjalla One', sans-serif;
            font-size: 88px;
            font-weight: 400;
            margin-top: 80px;
            margin-bottom: 50px;
            word-spacing: 40px;
            line-height: 110px;
          }

          .project-card {
            width: 80%;
            // max-width: 600px;
            // height: 80%;
            margin-bottom: 100px;
            position: relative;
            display: flex;
            flex-direction: row;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .12);
          }

          .project-card-image {
            display: flex;
            margin-top: 10px;
            ${imgFirst ? 'margin-left: 10px' : 'margin-right: 10px'};
            margin-bottom: 10px;
            justify-content: center;
            align-items: center;
            flex: 1;
            order: ${imgFirst ? 0 : 1};
            background-color: #fff;
            // background-image: url("${img}");
            background-position: 50% 50%;
            background-size: cover;
            background-repeat: no-repeat;
            text-decoration: none;
          }

          .project-card-image img {
            width: 100%;
          }

          .project-card-info {
            position: relative;
            display: flex;
            width: 60%;
            padding: 48px 20px;
            justify-content: center;
            align-items: center;
            order: ${imgFirst ? 1 : 0};
          }

          .project-card-content {
            position: relative;
            z-index: 1;
            display: flex;
            width: 100%;
            height: 100%;
            padding-top: 8px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .grey-text {
            margin: 5px 0
          }

          .project-card-top {
            flex: 1;
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .project-card-bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .project-card-technologies {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            padding-top: 10px;
          }

          .project-card-links {
            flex: 1;
            flex-direction: column;
            margin-top: 15px;
          }

          .project-card-techno {
            width: 30px;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          .project-card-techno:last-child {
            margin-right: 0px;
          }
          .project-link-container {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .project-link {
            text-decoration: none;
          }
          .project-link i {
            color: #dfa25f;
            font-size: 32px;
            margin: 0 5px;
            transition: all 0.3s;
          }
          .project-link h6 {
            color: #666;
            font-size: 16px;
            margin: 0;
            transition: all 0.3s;
          }
          .project-link-container:hover i {
            color: #d99244;
          }
          .project-link-container:hover h6 {
            color: #444;
          }

          @media (max-width: 1200px) {
            .project-title {
              font-size: 54px;
              font-weight: 400;
              margin-top: 50px;
              margin-bottom: 30px;
              word-spacing: 40px;
              line-height: 70px;
            }

            .project-card {
              flex-direction: column
            }

            .project-card-image {
              order: 1;
              margin: 10px;
              margin-bottom: 0;
            }

            .project-card-info {
              order: 2;
              width: 100%;
            }
          }

          @media (max-width: 600px) {
            .project-title {
              font-size: 44px;
              font-weight: 400;
              margin-top: 40px;
              margin-bottom: 20px;
              word-spacing: 30px;
              line-height: 50px;
            }
            .project-card {
              margin-bottom: 50px;
            }
            .grey-text {
              font-size: 14px;
            }
            .project-card-techno {
              width: 25px;
              margin-right: 5px;
            }
            .project-link i {
              font-size: 22px;
            }
            .project-link h6 {
              font-size: 14px;
            }
          }
        `}</style>
      </section>
    );
};

export default ProjectCard;
