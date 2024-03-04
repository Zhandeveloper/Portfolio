import React from 'react'
import siteIcon from "./../img/icons/site.png"
const BtnSite = ({link}) => {
  return (
    <>
    <a href={link} className="btn-outline" target='blank'>
              <img src={siteIcon} alt="site img" />
             Go to site
            </a>
    </>
  )
}

export default BtnSite