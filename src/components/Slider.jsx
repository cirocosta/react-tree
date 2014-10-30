/**
 * @jsx React.DOM
 */

require('./Slider.scss');
var React = require('react');

var Slider = React.createClass({
  propTypes: {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    step: React.PropTypes.number.isRequired,

    initial: React.PropTypes.number,
    onChange: React.PropTypes.func
  },

  getInitialState () {
    return {
      value: this.props.initial || this.props.min
    };
  },

  handlePrev () {
    this.setState({
      value: this.state.value - this.props.step
    });
  },

  handleNext () {
    this.setState({
      value: this.state.value + this.props.step
    });
  },

  handleChange (e) {
    this.setState({
      value: +e.target.value
    });
  },

  componentWillUpdate (_, nextState) {
    this.props.onChange && this.props.onChange(nextState.value);
  },

  hasNext () {
    return this.state.value + this.props.step <= this.props.max;
  },

  hasPrev () {
    return this.state.value - this.props.step >= this.props.min;
  },

  render () {
    return (
      <div className={'Slider'}>
        <button onClick={this.handlePrev} disabled={!this.hasPrev()}>
          prev
        </button>
        <input type="range"
               onChange={this.handleChange}
               min={this.props.min}
               max={this.props.max}
               step={this.props.step}
               value={this.state.value} />
        <button onClick={this.handleNext} disabled={!this.hasNext()}>
          next
        </button>
      </div>
    );
  }
});

module.exports = Slider;
