import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import teachers from '../data/dataTeacher'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function TeacherDetail() {
  const { location: { pathname } } = useHistory();
  const id = parseInt(pathname.split('/')[2]);

  const teacher = teachers.find((teacher) => teacher.id === id );

  return(
    <>
    <Header />
      <main>
        <h3>{teacher.name}</h3>
        <p>{teacher.history}</p>
        <Link to="/quem-somos">
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
