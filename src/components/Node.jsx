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
    node: React.PropTypes.object.isRequired,

    onClick: React.PropTypes.func,
  },

  handleClick () {
    this.props.onClick && 
      this.props.onClick(this.props.node);
  },

  render () {
    var translate = 'translate(' + this.props.x + ',' +
                                   this.props.y + ')';
    var classes = {Node: true};

    if (this.props.node.active) {
      if (toString.call(this.props.node.active) === '[object String]')
        classes[this.props.node.active] = true; 
      else
        classes['active'] = true;
    }

    return (
      <g className={cx(classes)} transform={translate}>
        <circle r={this.props.r} onClick={this.handleClick} />
        <text style={{fillOpacity: '1'}} y={this.props.r * -1.5}>{this.props.name}</text>
      </g>
    );
  }
});

module.exports = Node;
