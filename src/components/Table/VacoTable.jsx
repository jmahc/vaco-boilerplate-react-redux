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
    const renderWhatData = this.props.savedForm || 'no saved data source';
    console.log('Props passed are...');
    console.info(this.props);
    const data = JSON.stringify(this.props.savedForm || 'no saved data source');
    console.log('Data for the table is...');
    console.info(data);
    return (
      <div>
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
        <div>Last submitted data: {data}</div>
      </div>
    );
  }
}

export default VacoTable;
