import React from 'react';
import { Link } from 'react-router';
import { Layout, Panel } from 'vaco-components-library';

const About = () => (
  <div>
    <Layout>
      <Panel>
        <h1>About Page!</h1>
        <Link to="/">Back to Home</Link>
      </Panel>
    </Layout>
  </div>
);

export default About;
