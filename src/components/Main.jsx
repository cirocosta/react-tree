/**
 * @jsx React.DOM
 */

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
            "id": "D"
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
var {bfs, Memoizer} = require('../util');
var Layout = require('./Layout.jsx');
var Tree = require('./Tree.jsx');
var Slider = require('./Slider.jsx');
var MARGINS = {
  top: 20, right: 20,
  bottom: 20, left: 20
};
var SIZES = {
  width: 500 - MARGINS.right - MARGINS.left,
  height: 500 - MARGINS.top - MARGINS.bottom
};

bfs = Memoizer(bfs).init();

var Main = React.createClass({
  getInitialState () {
    return {
      tree: treeData
    };
  },

  handleSliderChange (state) {
    if (CALLS[state]) {
      var a = bfs(treeData[0], CALLS[state]);
      a.active = true;

      this.setState({
        tree: treeData
      });
    }
  },

  render () {
    var {width, height} = Layout.computeSize(SIZES, MARGINS);

    return (
      <main>
        <Layout margins={MARGINS} sizes={SIZES}>
          <Tree tree={this.state.tree} width={width} height={height} 
                margins={MARGINS} line={true} horizontal={true}/>
        </Layout>
        <Slider min={0} max={CALLS.length - 1} step={1} 
                onChange={this.handleSliderChange}/>
      </main>
    );
  }
});

module.exports = Main;
