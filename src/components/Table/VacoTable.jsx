import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import { Table } from 'vaco-components-library';

const FormModel = {
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
};

class VacoTable extends Component {
  state = {
    selected: [],
    source: [],
  };

  handleChange = (row, key, value) => {
    const source = this.state.source;
    source[row][key] = value;
    this.setState({source});
  };

  handleSelect = (selected) => {
    this.setState({selected});
  };

  render () {
    return (
      <Table
        model={FormModel}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        editable={false}
        selectable
        multiSelectable
        selected={this.state.selected}
        source={this.state.source}
      />
    );
  }
}

export default VacoTable;
