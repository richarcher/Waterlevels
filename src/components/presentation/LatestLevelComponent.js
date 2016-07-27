'use strict';

import React from 'react';
import {Motion, spring} from 'react-motion';

require('styles/presentation/LatestLevel.scss');

class LatestLevelComponent extends React.Component {
  render() {
    const props = this.props;
    const level = props.newLevel;
    const percentage = parseInt(level.percentage, 10) / 100;
    const wobble = {};
    const relativeSize = this.props.storage ? parseInt(level.storage,10) / this.props.storage : 3;
    const targetArea = props.width*relativeSize;
    const squareRoot = Math.pow((targetArea/props.width),0.5);
    const newHeight = squareRoot * 150;
    const newWidth = (squareRoot * props.width) * 150;

    return (
      <div style={{ width: newWidth, height: newHeight }} className="latestlevel-component">
        { this.renderIfVisible(percentage, wobble) }
      </div>
    );
  }

  renderIfVisible(percentage, wobble) {
    if (this.props.fullyVisible) {
      return this.renderAnimation(percentage, wobble)
    } else {
      return <div></div>
    }
  }

  renderAnimation(percentage, wobble) {
    return (
      <Motion
        defaultStyle={{
          y : this.props.oldLevel.level
        }}
        style={{
          y : spring(percentage, wobble)
        }}>

        {
          style => <div className="inner" style={{transform: `scaleY(${style.y})` }}></div>
        }
      </Motion>
    );
  }
}

LatestLevelComponent.displayName = 'LatestLevelComponent';

LatestLevelComponent.propTypes = {
  storage: React.PropTypes.number,
  newLevel: React.PropTypes.object.isRequired,
  oldLevel: React.PropTypes.object,
  fullyVisible: React.PropTypes.bool
};
LatestLevelComponent.defaultProps = {
  width: 1.618,
  height: 1,
  fullyVisible: true,
  oldLevel: { level : 0 }
};

export default LatestLevelComponent;
