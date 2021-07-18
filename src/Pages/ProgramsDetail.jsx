import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import programs from '../data/dataPrograms'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function TeacherDetail() {
  const { location: { pathname } } = useHistory();
  const id = pathname.split('/')[2];

  const program = programs.find((program) => program.id === id );

  return(
    <>
    <Header />
      <main>
        <h3>{program.name}</h3>
        <p>{program.description}</p>
        <Link to="/programas">
        <button
        type="button"
        >
          Voltar
        </button>
        </Link>
      </main>
      <Footer
      urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}