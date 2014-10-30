/** @jsx React.DOM */

require('./Tree.scss');
var React = require('react');
var d3 = require('d3');
var Node = require('./Node.jsx');

var Tree = React.createClass({
  propTypes: {
    tree: React.PropTypes.array.isRequired,
    margins: React.PropTypes.object.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    line: React.PropTypes.bool,
    horizontal: React.PropTypes.bool
  },

  render () {
    var ort = this.props.horizontal ? ['y', 'x'] : ['x', 'y'];
    var pathGen;
    var root = this.props.tree[0];
    var tree = d3.layout
                 .tree()
                 .size([this.props.height, this.props.width]);
    var gTransf = 'translate(' + this.props.margins.left + ',' +
                                 this.props.margins.top + ')';
    var nodes = tree.nodes(root);
    var links = tree.links(nodes);

    if (!this.props.line)
      pathGen = d3.svg.diagonal()
                      .projection((d) => [d[ort[0]], d[ort[1]]]);
    else
      pathGen = (d) => d3.svg.line()
                       .x((d) => d[ort[0]])
                       .y((d) => d[ort[1]])([{x: d.source.x, y: d.source.y}, 
                                             {x: d.target.x, y: d.target.y}]);


    nodes.forEach((d) => {d.y = d.depth * 180;});

    var nodeElems = nodes.map((node, i) =>
      <Node x={node[ort[0]]} y={node[ort[1]]} name={node.name} 
            r={10} key={i} active={node.active} />);

    var linkElems = links.map((link, i) =>
      <path key={i} className={'Link'} d={pathGen(link, i)}></path>);

    return (
      <g className={'Tree'} transform={gTransf}>
        {linkElems}
        {nodeElems}
      </g>
    );
  }
});

module.exports = Tree;
