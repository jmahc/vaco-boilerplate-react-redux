import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import {
  Table
} from 'vaco-components-library';

class VacoTable extends Component {
  handleChange = (row, key, value) => {
    const source = this.state.source;
    source[row][key] = value;
    this.setState({source});
  };

  handleSelect = (selected) => {
    this.setState({selected});
  };

  render () {
    const data = JSON.stringify(this.props.savedForm || 'no saved data');
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
