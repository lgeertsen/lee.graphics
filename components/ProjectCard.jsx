import React, { useState } from 'react';

const ProjectCard = ({ project, description }) => {


    return (
      <div className="project-card">
        {/* <div className="frame frame-yellow"></div> */}
        <div className="project-card-image"></div>
        <div className="project-card-info">
          <div className="project-card-content">
            <h2 className="project-title">{project}</h2>
            <div className="divider"></div>
            <p className="grey-text">{description}</p>
          </div>
          <div className="frame frame-grey"></div>
        </div>

        <style jsx>{`
          .project-card {
            width: 600px;
            // max-width: 600px;
            height: 30vh;
            position: relative;
            display: flex;
            flex-direction: row;
            margin: 0 25px;
            margin-bottom: 40px;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .12);
          }

          .project-card-image {
            display: flex;
            margin-top: 10px;
            margin-left: 10px;
            margin-bottom: 10px;
            justify-content: center;
            align-items: center;
            flex: 1;
            background-color: #e3e3e3;
            background-image: url("https://images.unsplash.com/photo-1535016120720-40c646be5580");
            background-position: 50% 50%;
            background-size: cover;
            background-repeat: no-repeat;
            text-decoration: none;
          }

          .project-card-info {
            position: relative;
            display: flex;
            width: 55%;
            padding: 48px 20px;
            justify-content: center;
            align-items: center;
          }

          .project-card-content {
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

          .project-title {
            color: #444;
            font-family: 'Tuesday Night', 'Fjalla One', sans-serif;
            font-size: 68px;
            font-weight: 400;
          }
        `}</style>
      </div>
    );
};

export default ProjectCard;
