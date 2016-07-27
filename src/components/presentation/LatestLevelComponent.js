'use strict';

import React from 'react';
import {Motion, spring} from 'react-motion';

require('styles/presentation/LatestLevel.scss');

class LatestLevelComponent extends React.Component {
  render() {
    let props = this.props;
    let level = this.props.level;
    let percentage = parseInt(level.percentage, 10) / 100;
    let wobble = {stiffness: level.percentage/5, damping: level.percentage/20 };
    let relativeSize = parseInt(level.storage,10) / 190878;
    let targetArea = 1.618*relativeSize;
    let squareRoot = Math.pow((targetArea/props.width),0.5)
    let newHeight = squareRoot * 150;
    let newWidth = (squareRoot * props.width) * 150;

    return (
      <div style={{ width: newWidth, height: newHeight }} className="latestlevel-component">
        <Motion
          defaultStyle={{
            y : 0
          }}
          style={{
            y : spring(percentage, wobble)
          }}>

          {
            style => <div className="inner" style={{transform: `scaleY(${style.y})` }}></div>
          }
        </Motion>
      </div>
    );
  }
}

LatestLevelComponent.displayName = 'SvgLatestLevelComponent';

LatestLevelComponent.propTypes = {
  level: React.PropTypes.object
};
LatestLevelComponent.defaultProps = {
  width: 1.618,
  height: 1,
  level: {}
};

export default LatestLevelComponent;
