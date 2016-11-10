import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { incrementAsync } from 'redux/modules/counter';
import { requestGreeting } from 'redux/modules/greeting';
import { Button } from 'vaco-components-library';

const Home = ({
  onIncrementClick,
  onGreetClick,
  count,
  greeting,
}) => (
  <div className="home">
    <h1>{count}</h1>
    <h4>{greeting}</h4>
    <Button raised primary onClick={onIncrementClick}>increment</Button>
    <Button raised primary onClick={onGreetClick}>greet</Button>
    <br />
    <br />
    <Link to="/about">About</Link>
    <br />
    <Link to="/team">team</Link>
    <br />
    <br />
    <a href="./team.html">TeamHTML</a>
    <br />
    <br />
    <a href="./index.html">IndexHTML</a>
  </div>
);

Home.propTypes = {
  onIncrementClick: PropTypes.func.isRequired,
  onGreetClick: PropTypes.func.isRequired,
  count: PropTypes.number,
  greeting: PropTypes.string,
};

const mapStateToProps = state => ({
  count: state.counter.count,
  routing: state.routing,
  greeting: state.greeting.text,
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
