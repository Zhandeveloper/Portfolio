import React from 'react'
import GitHubIcon from "./../img/icons/gitHub-black.svg"

const BtnGit = ({link}) => {
  return (
    <>
    <a href={link} className="btn-outline" target='blank'>
              <img src={GitHubIcon} alt="git img" />
              GitHub repo
            </a>
    </>
  )
}

export default BtnGit