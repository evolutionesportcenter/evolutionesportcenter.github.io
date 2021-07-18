import React from 'react';
import teachers from '../../data/dataTeacher';
import SocialMidea from '../SocialMedias';
import { Link } from 'react-router-dom';
import suelemGomes from '../../images/suelemGomes.jpeg'

export default function SuelemGomesCard() {
  return(
    <>
      <h3>{ teachers[1].name }</h3>
      <img 
        alt={`Foto do professor(a) ${  teachers[1].name }`}
        src={ suelemGomes }
        width="300px"
      />
      <span><i>{ teachers[1].inspiration}</i></span>
      <SocialMidea
        thisMidea={ ( teachers[1].facebook !== null) ? true : false }
        urlFaceBook={  teachers[1].facebook }
        urlInstagran={  teachers[1].instagran }
      />
      <Link to={`/quem-somos/${ teachers[1].id}`} >
        <button
        type="button"
        >
          Mais Detalhes
        </button>
      </Link>
    </>
  );
}
