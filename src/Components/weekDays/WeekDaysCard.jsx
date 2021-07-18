import React from 'react';

export default function WeekDaysCard({ day }) {
  const categories = day.modality[0].category;

  return(
    <div>
      <h3>{day.name}</h3>
      <h4>Modalidade: {day.modality[0].name}</h4>
      { categories.map((category) => (
        <>
        <h5>{category.name}</h5>
        <ul>
          <li>Horário: {category.shedules.first}</li>
          { (category.shedules.second !== undefined) ? (
          <li>Horário: {category.shedules.second}</li>
          ) : null }
          { (category.shedules.third !== undefined) ? (
          <li>Horário: {category.shedules.third}</li>
          ) : null } 
        </ul>
        </>
      )) }
    </div>
  );
}