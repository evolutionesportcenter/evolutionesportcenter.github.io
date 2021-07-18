import React from 'react';
import teachers from '../../data/dataTeacher';
import SocialMidea from '../SocialMedias';
import { Link } from 'react-router-dom';
import ThomasBrian from '../../images/ThomasBrian.jpeg'

export default function ThomasBrianCard() {
  return(
    <>
      <h3>{ teachers[2].name }</h3>
      <img 
        alt={`Foto do professor(a) ${  teachers[2].name }`}
        src={ ThomasBrian }
        width="300px"
      />
      <span><i>{ teachers[2].inspiration}</i></span>
      <SocialMidea
        thisMidea={ ( teachers[2].facebook !== null) ? true : false }
        urlFaceBook={  teachers[2].facebook }
        urlInstagran={  teachers[2].instagran }
      />
      <Link to={`/quem-somos/${ teachers[2].id}`} >
        <button
        type="button"
        >
          Mais Detalhes
        </button>
      </Link>
    </>
  );
}