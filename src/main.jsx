/**
 * @jsx React.DOM
 */

/**
 * Entry point for the Application
 */
var React = require('react');
var {Main} = require('./components');

React.renderComponent(
  <Main />,
  document.body
);

window.React = React;
