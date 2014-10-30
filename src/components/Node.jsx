/**
 * @jsx React.DOM
 */

require('./Node.scss');
var React = require('react');
var {cx} = require('../util');

var Node = React.createClass({
  props: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    r: React.PropTypes.number.isRequired,
    active: React.PropTypes.bool
  },

  render () {
    var translate = 'translate(' + this.props.x + ',' +
                                   this.props.y + ')';

    var classes = cx({
      Node: true,
      active: this.props.active
    });

    return (
      <g className={classes} transform={translate}>
        <circle r={this.props.r} />
        <text style={{fillOpacity: '1'}} y={this.props.r * -1.5}>{this.props.name}</text>
      </g>
    );
  }
});

module.exports = Node;
