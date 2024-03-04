import React from 'react'
import { NavLink } from 'react-router-dom'
function ProjectComponent(props) {
  const {title,img,index}=props
  return (
    <NavLink to={`/project/${index}`}>
    <li className="project">
              <img src={img} alt={title} className="project__img" />
              <h3 className="project__title">{title}</h3>
          </li>
    </NavLink>
  )
}

export default ProjectComponent