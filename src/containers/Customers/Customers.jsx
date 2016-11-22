import React from 'react';
import {
  Layout,
  Panel,
} from 'vaco-components-library';
import {
  VacoFormContainer,
  VacoFormDataContainer,
} from 'containers';

const dataArray = [];

const handleSubmit = (values) => {
  new Promise((resolve) => { // eslint-disable-line no-new
    setTimeout(() => {  // simulate server latency
      window.alert(`dataArray is ${dataArray}`);
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      dataArray.push(values);
      window.alert(`dataArray is now ${dataArray}`);
      resolve();
    }, 500);
  });
};

const Customers = () => (
  <div className="customers">
    <Layout className="mdl-grid">
      <Panel className="mdl-cell mdl-cell--12-col">
        <h1>
          Customerss
        </h1>
      </Panel>
    </Layout>
    <Layout className="mdl-grid">
      <Panel className="mdl-cell mdl-cell--6-col">
        <VacoForm onSubmit={handleSubmit} />
      </Panel>
      <Panel className="mdl-cell mdl-cell--6-col">
        <VacoTable data={dataArray.length > 0 ? dataArray : []} />
      </Panel>
    </Layout>
  </div>
);

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept('./Customers.jsx');
}

export default Customers;
