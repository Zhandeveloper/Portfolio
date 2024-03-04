import React from 'react';
import ProjectComponent from '../components/ProjectComponent';
import { projects_m } from '../components/helpers/projectList';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
              {projects_m.map((project,index)=>{
                return (
                  <ProjectComponent title={project.title} img={project.img} key={project.id} index={index}/>
                )
              })}
              

          

        </ul>
      </div>
    </main>
  );
};

export default Projects;
