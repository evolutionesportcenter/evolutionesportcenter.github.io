import React from 'react';
import teachers from '../../data/dataTeacher';
import SocialMidea from '../SocialMedias';
import { Link } from 'react-router-dom';
import joseRoberto from '../../images/joseRoberto.jpeg'

export default function JoseRobertoCard() {
  return(
    <>
      <h3>{ teachers[0].name }</h3>
      <img 
        alt={`Foto do professor(a) ${  teachers[0].name }`}
        src={ joseRoberto }
        width="300px"
      />
      <span><i>{ teachers[0].inspiration}</i></span>
      <SocialMidea
        thisMidea={ ( teachers[0].facebook !== null) ? true : false }
        urlFaceBook={  teachers[0].facebook }
        urlInstagran={  teachers[0].instagran }
      />
      <Link to={`/quem-somos/${ teachers[0].id}`} >
        <button
        type="button"
        >
          Mais Detalhes
        </button>
      </Link>
    </>
  );
}
