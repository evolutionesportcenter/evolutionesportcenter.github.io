import React from 'react';

export default function Plans({ plan }) {
  return(
    <div>
      <h2>Plano {plan.name}</h2>
      <h3>Valor R$ {plan.value},00</h3>
    </div>
  );
}