import React from 'react';
import { VacoForm } from 'components';

const showResults = values =>
  new Promise((resolve) => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });

const Customers = () => (
  <div className="customers">
    <h1>
      Customers
    </h1>
    <VacoForm onSubmit={showResults} />
  </div>
);

export default Customers;
