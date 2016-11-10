import React from 'react';
import { Button, Card, CardActions, CardMedia, CardText, CardTitle, Layout, Panel } from 'vaco-components-library';
import cat from 'assets/img/cat.jpg';
import catvatar from 'assets/img/catvatar.jpg';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const Team = () => (
  <div>
    <Layout>
      <Panel>
        <h1>Team Page!</h1>
        <br />
        <a href="/about.html">Back to AboutHTML homepage.</a>
        <br />
        <br />
        <a href="/">Back to IndexHTML homepage.</a>
      </Panel>
      <Panel>
        <Card style={{ width: '350px' }}>
          <CardTitle
            avatar={catvatar}
            title="Avatar style title"
            subtitle="Subtitle here"
          />
          <CardMedia
            aspectRatio="wide"
            image={cat}
          />
          <CardTitle
            title="Title goes here"
            subtitle="Subtitle here"
          />
          <CardText>{dummyText}</CardText>
          <CardActions>
            <Button label="Action 1" />
            <Button label="Action 2" />
          </CardActions>
        </Card>
      </Panel>
    </Layout>
  </div>
);

export default Team;
