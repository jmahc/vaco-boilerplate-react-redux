import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Layout,
  Panel,
} from 'vaco-components-library';
import {
  VacoForm,
  VacoTable,
} from 'components';

const handleFormSubmit = (props) => {
  console.log('After form submission, props are:');
  console.info(props);
  new Promise((resolve) => { // eslint-disable-line no-new
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(this.props.values, null, 2)}`);
      resolve();
    }, 500);
  });
};

class Customers extends Component {
  // static propTypes = {
  //   handleFormSubmit: PropTypes.func,
  // };

  render() {
    return (
      <div className="customers">
        <h1>
          Customerss
        </h1>
        <Layout className="mdl-grid">
          <Panel className="mdl-cell mdl-cell--6-col">
            <span>
              VacoForm onSubmit=openBracket handleSubmit closeBracket
            </span>
          </Panel>
          <Panel className="mdl-cell mdl-cell--6-col">
            <VacoTable form="CustomersForm" />
          </Panel>
        </Layout>
      </div>
    );
  }
}

// const Customers = () => (
//   <div className="customers">
//     <h1>
//       Customerss
//     </h1>
//     <Layout className="mdl-grid">
//       <Panel className="mdl-cell mdl-cell--6-col">
//         <VacoForm onSubmit={handleSubmit} />
//       </Panel>
//       <Panel className="mdl-cell mdl-cell--6-col">
//         <VacoTable form="CustomersForm" />
//       </Panel>
//     </Layout>
//   </div>
// );

// Customers.propTypes = {
//   // fields: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default Customers;
