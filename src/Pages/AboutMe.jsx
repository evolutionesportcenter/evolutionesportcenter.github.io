import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import JoseRobertoCard from '../Components/teacherCards/JoseRobertoCard';
import SuelemGomesCard from '../Components/teacherCards/SuelemGomesCard';
import ThomasBrianCard from '../Components/teacherCards/ThomasBrianCard';

export default function AboutMe() {
  return(
    <>
      <Header />
      <main>
        <section>
          <h1>Evolution Sport Center</h1>
            <p> A academia foi fundada em 2014 pelo professor Jose Roberto e amigos que  acreditaram no seu potencial para administrar e transforma-la em um ambiente agradável para treinar.
            Mas foi passando por vários processos de mudança como: local, estrutura, nome e logo que a deixou de cara nova.
            O Centro de Treinamento tem inúmeros alunos que buscavam as aulas de lutas sem o objetivo competitivo, apenas para controle e tratamento de diversas patologias.</p>
        </section>
        <section>
          <h2>Holl de Professores</h2>
          <JoseRobertoCard />
          <SuelemGomesCard />
          <ThomasBrianCard />

        </section>
        
     </main>
    <Footer
    urlInstagran="https://www.instagram.com/evolutionsportcenter/"
    />
    </>
  );
}
