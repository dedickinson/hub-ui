// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';

const Weather = () => {
  return (
    <Panel bsStyle="primary">
      <Panel.Heading componentClass="h3">Weather</Panel.Heading>
      <Panel.Body>Hot town, Summer in the city</Panel.Body>
    </Panel>
  );
};

export default Weather;