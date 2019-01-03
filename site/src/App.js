// @flow

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import './App.css';
import Home from './components/Home';
import Photos from './components/Photos';
import Weather from './components/Weather';
import Navigation from './components/Navigation';
import Lighting from './components/Lighting';

type Props = {
  title: string,
};

type State = {};

class App extends React.Component<Props, State> {
  timerID: IntervalID;

  constructor(props) {
    super(props);
    this.state = {
      timestamp: App.get_timestamp()
    };
  }

  static get_timestamp() {
    return moment(new Date());
  }

  tick() {
    this.setState({
      timestamp: App.get_timestamp(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Grid>
            <Row>
              <Col xs={4} md={3}>
                  <Navigation />
                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">
                      {this.state.timestamp.format("dddd, MMMM Do")}
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <span className="calendar-time">
                      {this.state.timestamp.format("HH:mm")}
                    </span>
                  </Panel.Body>
                  <Panel.Footer>
                    {this.state.timestamp.year()}
                  </Panel.Footer>
                </Panel>
              </Col>
              <Col xs={8} md={9}>
                <section>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/weather" component={Weather} />
                    <Route exact path="/photos" component={Photos} />
                    <Route exact path="/lighting" component={Lighting} />
                  </Switch>
                </section>
              </Col>
            </Row>
          </Grid>

          <footer />
        </div>
      </Router>
    );
  }
}

export default App;
