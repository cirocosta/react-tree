/** @jsx React.DOM */

require('./Tree.scss');
var React = require('react');
var d3 = require('d3');
var Node = require('./Node.jsx');
var {cx} = require('../util');

var Tree = React.createClass({
  propTypes: {
    tree: React.PropTypes.array.isRequired,
    margins: React.PropTypes.object.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  },

  render () {
    var classes = cx({
      Tree: true,
    });

    var root = this.props.tree[0];
    var diagonal = d3.svg.diagonal()
                         .projection((d) => [d.y, d.x]);
    var tree = d3.layout
                 .tree()
                 .size([this.props.height, this.props.width]);
    var gTransf = 'translate(' + this.props.margins.left + ',' +
                                 this.props.margins.top + ')';
    var nodes = tree.nodes(root);
    var links = tree.links(nodes);

    nodes.forEach((d) => {d.y = d.depth * 180;});

    var nodeElems = nodes.map((node, i) =>
      <Node x={node.y} y={node.x} name={node.name} r={10} key={i} active={node.active} />);

    var linkElems = links.map((link, i) =>
      <path key={i} className={'Link'} d={diagonal(link, i)}></path>);

    return (
      <g className={classes} transform={gTransf}>
        {linkElems}
        {nodeElems}
      </g>
    );
  }
});

module.exports = Tree;
