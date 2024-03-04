import React from 'react'

const Contacts = () => {
  return (
    <>
    <main classNameName="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Astana, Kazakhstan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Contact with me</h2>
                        <p><a href="https://t.me/Zhan2018" target='blank'>Telegram</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="Zhulaeve2006@gmail.com">Zhulaeve2006@gmail.com</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Work</h2>
                        <p><a href="https://hh.kz/resume/26b71e15ff0b0344810039ed1f357a3651716e" target='blank'>HeadHunter</a></p>
                    </li>
                </ul>

        </div>
    </main>
    </>
  )
}

export default Contacts