import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProgramsCard from '../Components/ProgramsCard';
import programs from '../data/dataPrograms'

export default function Programs() {
  return(
    <>
      <Header />
      <main>
        { programs.map((program) => <ProgramsCard program={program} />) }
      </main>
      <Footer
      urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}