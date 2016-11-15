import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { incrementAsync } from 'redux/modules/counter';
import { requestGreeting } from 'redux/modules/greeting';
import { Button } from 'vaco-components-library';

const Home = ({
  count,
  greeting,
  onGreetClick,
  onIncrementClick,
}) => (
  <div className="home">
    <h1>{count}</h1>
    <h4>{greeting}</h4>
    <Button raised primary onClick={onIncrementClick}>increment</Button>
    <Button raised primary onClick={onGreetClick}>greet</Button>
  </div>
);

Home.propTypes = {
  count: PropTypes.number,
  greeting: PropTypes.string,
  onGreetClick: PropTypes.func.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
  greeting: state.greeting.text,
  routing: state.routing,
});

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => {
    dispatch(incrementAsync());
  },
  onGreetClick: () => {
    dispatch(requestGreeting());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

if (__DEVELOPMENT__ && module.hot) {
  // Support hot reloading of components
  console.log('Trying to hot reload HOME....');
  module.hot.accept('./Home.jsx');
}
