// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';

type Props = {};
type State = {};

class Lighting extends React.Component<Props, State> {
    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Heading componentClass="h3">Lighting</Panel.Heading>
                <Panel.Body>You light up my life</Panel.Body>
            </Panel>
        );
    };
}

export default Lighting;