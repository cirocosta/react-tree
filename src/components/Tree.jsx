/** @jsx React.DOM */

require('./Tree.scss');
var React = require('react');
var Node = require('./Node.jsx');
var {bfs, Memoizer, cx, d3} = require('../util');

var SIZE = 460;

var Tree = React.createClass({
  propTypes: {
    tree: React.PropTypes.array.isRequired,
    horizontal: React.PropTypes.bool,
    onNodeClick: React.PropTypes.func,
    circleRadius: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      circleRadius: 10
    }
  },

  statics: {
    bfs: bfs,
    Memoizer: Memoizer
  },

  render () {
    var pathGen;
    var tree = d3.tree().size([SIZE, SIZE]);
    var ort = this.props.horizontal ? ['y', 'x'] : ['x', 'y'];
    var root = this.props.tree[0];
    var nodes = tree.nodes(root);
    var links = tree.links(nodes);
    var depth = nodes.reduce((max, curr) => 
      curr.depth > max ? curr.depth : max, -1) + 1;

    pathGen = d3.diagonal().projection((d) => [d[ort[0]], d[ort[1]]]);

    nodes.forEach((d) => {d.y = d.depth * SIZE/depth;});

    var nodeElems = nodes.map((node, i) =>
      <Node x={node[ort[0]]} y={node[ort[1]]} name={node.name}
            onClick={this.props.onNodeClick} r={this.props.circleRadius} 
            key={i} node={node} />);

    var linkElems = links.map((link, i) =>
      <path key={i} 
            className={cx({Link: true, active: link.target.activeLink})} 
            d={pathGen(link, i)}></path>);

    return (
      <svg viewBox={"0 0 " + SIZE + ' ' + SIZE}
           preserveAspectRatio="xMidYMid">
        <g className={'Tree'} transform="translate(40,40)">
          {linkElems}
          {nodeElems}
        </g>
      </svg>
    );
  }
});

module.exports = Tree;
