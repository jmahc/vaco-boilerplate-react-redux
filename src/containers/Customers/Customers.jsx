import React, { Component, PropTypes } from 'react';
import {
  Layout,
  Panel,
} from 'vaco-components-library';
import {
  VacoForm,
  VacoTable,
} from 'components';

const showResults = (values) => {
  new Promise((resolve) => { // eslint-disable-line no-new
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });
};

class Customers extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };
  render() {
    const { fields: { firstName }, handleSubmit } = this.props;
    return (<div className="customers">
        <h1>
          Customerss
        </h1>
        <Layout className="mdl-grid">
          <Panel className="mdl-cell mdl-cell--6-col">
            <VacoForm onSubmit={handleSubmit} />
          </Panel>
          <Panel className="mdl-cell mdl-cell--6-col">
            <VacoTable form="CustomersForm" />
          </Panel>
        </Layout>
      </div>
    );
  }
};

export default Customers;
