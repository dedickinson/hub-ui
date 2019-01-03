// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';

type Props = {};

class Home extends React.Component<Props, State> {
  render() {

    return (
      <Panel bsStyle="primary">
        <Panel.Heading componentClass="h3">Weather</Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
        <Panel.Footer>Last updated: #####</Panel.Footer>
      </Panel>
    );
  };
}

export default Home;
