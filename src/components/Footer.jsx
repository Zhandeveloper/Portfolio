import React from 'react'
import vk from '../img/icons/vk.svg'
import insta from '../img/icons/instagram.svg'
import gitHub from '../img/icons/gitHub.svg'
import tgIcon from '../img/icons/tgIcon.png'
const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="https://t.me/Zhan2018" target='blank'><img src={tgIcon} alt="Link" /></a></li>
              <li className="social__item"><a href="https://github.com/Zhandeveloper" target='blank'><img src={gitHub} alt="Link" /></a></li>
            </ul>
            <div className="copyright">
              <p>© Zhan 2024 </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer