// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';

type Props = {};
type State = {};

class Timer extends React.Component<Props, State> {
    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Heading componentClass="h3">Timer</Panel.Heading>
                <Panel.Body>I've had the time of my life</Panel.Body>
            </Panel>
        );
    };
}

export default Timer;