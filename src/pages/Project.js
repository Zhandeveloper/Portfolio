import React from 'react';
import { useParams } from 'react-router-dom';
import img_tic from "./../img/projects/Tic_tac_toe.JPG";
import GitHubIcon from "./../img/icons/gitHub-black.svg"
import siteIcon from "./../img/icons/site.png"
import BtnSite from '../components/BtnSite';
import BtnGit from '../components/BtnGit';
import { projects_m } from '../components/helpers/projectList';

const Project = () => {
  const {id}=useParams()
  const project=projects_m[id]
  
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>
            <img src={project.img} alt="Project Cover" className="project-details__cover" />
            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>
            <BtnSite link={project.SiteLink}/>
            <br/>
            <BtnGit link={project.gitHubLink}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
