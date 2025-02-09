import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import cv from '/portfolioimage.png'
import fond from '/download.jpeg'

function App() {
  const handleClickLinkdin = () => {
    window.open("https://www.linkedin.com/in/valentin-rousseau-208a31300/", "_blank");
  };
  const handleClickGithub = () => {
    window.open("https://www.linkedin.com/in/valentin-rousseau-208a31300/", "_blank");
  };

  return (
    <>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div>
        <h2>Valentin ROUSSEAU</h2>
          <img src={cv} className="logo" alt="React logo"/>
      </div>
      <br></br>
      <div>
        <p>Étudiant en informatique dans l'école EPITECH Bordeaux, à Bruges.
          Agréable et à l'écoute, je cherche un stage dans le domaine du web, afin d'en apprendre plus
          sur ce métier et de développer mes compétences dans ce domaine.
          Ayant des bases en CSS, HTML, Javascript, PHP et SQL, je souhaite approfondir mes
          connaissances.</p>
      </div>
      <h1></h1>
      <div className="card">
        <button onClick={handleClickLinkdin}>
          Linkedin
        </button>
        <br></br>
        <br></br>
        <button onClick={handleClickGithub}>
          Github
        </button>
      </div>
    </>
  )
}

export default App
