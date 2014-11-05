/**
 * @jsx React.DOM
 */

require('../dist/react-tree.css');
var React = require('react');
var treeData = [
  {
    "name": "A",
    "id": "A",
    "children": [
      {
        "name": "B",
        "id": "B",
        "children": [
          {
            "name": "C",
            "id": "C"
          },
          {
            "name": "D",
            "id": "D",
            "children": [
              {
                "name": "F",
                "id": "F"
              },   
            ]
          }
        ]
      },
      {
        "name": "E",
        "id": "E"
      }
    ]
  }
];

var CALLS = [null, 'A', 'B', 'D'];
var Tree = require('../dist/react-tree');
var Slider = require('./components/Slider.jsx');
var bfs = Tree.Memoizer(Tree.bfs).init();

var Main = React.createClass({
  getInitialState () {
    return {
      tree: treeData
    };
  },

  handleNodeClick (node) {
    console.log(node);
  },

  handleSliderChange (state) {
    if (CALLS[state]) {
      var a = bfs(treeData[0], CALLS[state]);
      a.active = true;
      a.activeLink = true;

      this.setState({
        tree: treeData
      });
    }
  },

  render () {
    return (
      <main>
        <Tree tree={this.state.tree} 
              line={false} 
              horizontal={false} 
              onNodeClick={this.handleNodeClick} />
        <Slider min={0} max={CALLS.length - 1} step={1} 
                onChange={this.handleSliderChange}/>
      </main>
    );
  }
});

React.renderComponent(
  <Main />,
  document.body
);
