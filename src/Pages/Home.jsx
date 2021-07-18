import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Home() {
  return(
    <>
      <Header />
      <main>
      <h3>Vem conhecer nosso Espaço</h3>
      <p>Para quem nunca teve contato com Arte Marcial, oferecemos uma aula particular gratuita com um de nosssos professores. Em um ambiente confortável, com infra estrutura completa e uma equipe de alto nível, você terá uma experiência incomparável!</p>
      
     </main>
      <Footer 
      urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}
