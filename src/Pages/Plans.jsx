import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import plans from '../data/dataPlans'
import PlansCard from '../Components/PlansCard'

export default function Plans() {
  return(
    <>
      <Header />
      <main>
      { plans.map((plan) => <PlansCard plan={plan} />) }
     </main>
      <Footer
      urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}