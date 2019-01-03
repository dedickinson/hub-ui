// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';

const Photos = () => {
  return (
    <Panel bsStyle="primary">
      <Panel.Heading componentClass="h3">Photos</Panel.Heading>
      <Panel.Body>I've been staring so long at these pictures of you</Panel.Body>
    </Panel>
  );
};

export default Photos;