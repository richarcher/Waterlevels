'use strict';

import React from 'react';
import Moment from 'moment'
import Slider from 'rc-slider';

require('styles/presentation/Slider.scss');

class SliderComponent extends React.Component {
  render() {
    const tooltipFormatter = this._tooltipFormatter.bind(this);
    const levelCount = this.props.levels.length - 1;
    const maxRange = levelCount;
    const minRange = 0;

    return (
      <div>
        <Slider tipTransitionName="rc-slider-tooltip-zoom-down" min={minRange} max={maxRange} defaultValue={levelCount} tipFormatter={tooltipFormatter} onAfterChange={this.props.handleChange} />
        <br/>
      </div>
    );
  }

  _tooltipFormatter(value) {
    const index = (this.props.levels.length-1) - value;
    return Moment(this.props.levels[index].date).format('DD-MMM-YYYY')
  }
}

SliderComponent.displayName = 'PresentationSliderComponent';

// Uncomment properties you need
// SliderComponent.propTypes = {};
// SliderComponent.defaultProps = {};

export default SliderComponent;
