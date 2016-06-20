// var React = require('react');
// var ReactDOM = require('react-dom');
import * as React from "react";
import * as ReactDOM from "react-dom";

require('../styles/site.css');
import setupScheduler = require('./setupScheduler');

window.onload = () => {
    setupScheduler();
}

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);