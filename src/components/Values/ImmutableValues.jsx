import React from 'react';
import { values as valuesDecorator } from 'redux-form/immutable';

/**
 * This is just like the Values component that the other examples import, except that it works
 * with Immutable JS.
 */
const ImmutableValues = ({ form }) => { // eslint-disable-line
  const decorator = valuesDecorator({ form });
  const component = ({ values }) => { // eslint-disable-line
    return (
      <div>
        <h2>Values</h2>
        <code source={JSON.stringify(values ? values.toJS() : {}, null, 2)} />
      </div>
    );
  };
  const Decorated = decorator(component);
  return <Decorated />;
};

export default ImmutableValues;
