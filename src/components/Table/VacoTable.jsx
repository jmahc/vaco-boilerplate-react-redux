import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import {
  Table
} from 'vaco-components-library';

const FormModel = {
  firstName: {type: String},
  // lastName: {type: String},
  // email: {type: String},
};

class VacoTable extends Component {
  static absorbToIgnoreEsLint = {};
  state = {
    selected: [],
    source: this.props.data || [],
  };

  handleChange = (row, key, value) => {
    const source = this.state.source;
    console.log('handlechange source is.... :     [source, row, key, value]');
    console.debug(source);
    console.debug(row);
    console.debug(key);
    console.debug(value);
    source[row][key] = value;
    this.setState({source});
  };

  handleSelect = (selected) => {
    this.setState({selected});
  };

  render () {
    console.log('Data for the table is sourced from form submissions and is...');
    console.info(this.props.data);

    return (
      <div>
        <Table
          model={FormModel}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          selectable
          multiSelectable
          selected={this.state.selected}
          source={this.props.data}
        />
        <div>Last submitted data: {this.props.source}</div>
      </div>
    );
  }
}

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept('./VacoTable.jsx');
}

export default VacoTable;
