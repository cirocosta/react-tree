/**
 * @jsx React.DOM
 */

var React = require('react');

var computeSize = (sizes, margins) => {
  var width = sizes.width +
              margins.right +
              margins.left;
  var height = sizes.height +
               margins.top +
               margins.bottom;

  return {width, height};
};

/**
 * Represents the Layout of what will hold the
 * tree, i.e, the enclosing SVG and big G.
 */
var Layout = React.createClass({
  propTypes: {
    margins: React.PropTypes.object.isRequired,
    sizes: React.PropTypes.object.isRequired
  },

  statics: {
    computeSize: computeSize
  },

  render () {
    var {width, height} = computeSize(this.props.sizes, this.props.margins);

    return (
      <svg viewBox={"0 0 " + this.props.sizes.width + " " + this.props.sizes.height}
           preserveAspectRatio="xMidYMid">
        {this.props.children}
      </svg>
    );
  }
});

module.exports = Layout;
