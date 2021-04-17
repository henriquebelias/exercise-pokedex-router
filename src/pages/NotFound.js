import React from 'react';
import image from '../images/error404.jpg'

function NotFound() {
  return (
    <div>
      <h3>The page you are looking for do not exist</h3>
      <div className="img-container">
        <img src={image} alt="Error 404" />
      </div>
      <a href="https://br.freepik.com/vetores/abstrato">Vetor abstrato criado por freepik - br.freepik.com</a>
    </div>
  )
}

export default NotFound;
