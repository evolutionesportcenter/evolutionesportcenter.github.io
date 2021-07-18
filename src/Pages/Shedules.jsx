import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import shedules from '../data/dataShedules';
import WeekDaysCard from '../Components/weekDays/WeekDaysCard';

export default function Shedules() {
  return(
    <>
      <Header />
      <main>
        { shedules.map((shedule) => <WeekDaysCard day={ shedule } /> ) }
      </main>
      <Footer
      urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}