/**
 *
 *  Range Slider
 *
 */

import React from 'react';
import Slider, { SliderTooltip } from 'rc-slider';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
   <h1></h1>
  );
};

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 100000,
      rangeValue: this.props.defaultValue
    };
  }

  onSliderChange = v => {
    this.setState({
      sliderValue: v
    });
  };

  onRangeChange = v => {
    this.setState({
      rangeValue: v
    });
  };

  onAfterSliderChange = value => {
    this.props.onChange(value);
  };

  onAfterRangeChange = value => {
    this.props.onChange(value);
  };

  render() {
    const { type, marks, step, defaultValue, max, allowCross } = this.props;
    const { sliderValue, rangeValue } = this.state;

    return (
      <>
        {type === 'slider' ? (
          <Slider
            className='slider'
            dots
            reverse
            allowCross={allowCross}
            step={step}
            defaultValue={defaultValue}
            marks={marks}
            value={sliderValue}
            onChange={this.onSliderChange}
            onAfterChange={this.onAfterSliderChange}
          />
        ) : (
          <Range
            className='slider'
            pushable={1000}
            allowCross={allowCross}
            min={200000}
            max={max}
            step={step}
            defaultValue={defaultValue}
            marks={marks}
            handle={handle}
            tipFormatter={value => `$${value}`}
            value={rangeValue}
            onChange={this.onRangeChange}
            onAfterChange={this.onAfterRangeChange}
          />
        )}
      </>
    );
  }
}

RangeSlider.defaultProps = {
  type: 'range',
  allowCross: true
};

export default RangeSlider;
