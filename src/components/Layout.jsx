/**
 * @jsx React.DOM
 */

var React = require('react');

/**
 * Represents the Layout of what will hold the
 * tree, i.e, the enclosing SVG and big G.
 */
var Layout = React.createClass({
  render () {
    return (
      <svg viewBox={"0 0 460 460"}
           preserveAspectRatio="xMidYMid">
        {this.props.children}
      </svg>
    );
  }
});

module.exports = Layout;
