import React, { Component } from 'react';
import { Layout, Panel } from 'vaco-components-library';
import { VacoForm, VacoTable } from 'components';

const showResults = (values) => {
  new Promise((resolve) => { // eslint-disable-line no-new
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });
};

//    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
//    this.props.dispatch(initialize('CustomersForm', {}));
class Customers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="customers">
        <h1>
          Customerss
        </h1>
        <Layout>
          <Panel>
            <VacoForm onSubmit={showResults} />
          </Panel>
          <Panel>
            <VacoTable form="CustomersForm" />
          </Panel>
        </Layout>
      </div>
    );
  }
}

export default Customers;
