// @flow

import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect fluid>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>
              <Button type="button">
                  <i className="fa fa-home"></i>
              </Button>
            </NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/weather">
            <NavItem eventKey={2}>
              <Button>
                <i className="fa fa-thermometer-empty"></i>
              </Button>
            </NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/lighting">
            <NavItem eventKey={3}>
              <Button>
                <i className="fa fa-lightbulb-o"></i>
              </Button>
            </NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/photos">
            <NavItem eventKey={4}>
              <Button>
                <i className="fa fa-camera-retro"></i>
              </Button>
            </NavItem>
          </IndexLinkContainer>
        </Nav>
    </Navbar>
  );
};

export default Navigation;
