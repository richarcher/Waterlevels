'use strict';

import React from 'react';
import {Motion, spring} from 'react-motion';

import Waterlevel from '../presentation/WaterLevelComponent';

require('styles/presentation/MotionLevel.scss');

class MotionLevelComponent extends React.Component {
  render() {
    const props = this.props;
    const level = props.newLevel;
    const percentage = parseInt(level.percentage, 10) / 100;
    const wobble = {};
    const relativeSize = this.props.storage ? parseInt(level.storage,10) / this.props.storage : 1;
    const targetArea = props.width*relativeSize;
    const squareRoot = Math.pow((targetArea/props.width),0.5);
    const newHeight = (squareRoot * props.height) * 100;
    const newWidth = (squareRoot * props.width) * 100;
    const width = parseInt(newWidth * 7, 10);

    return (
      <div style={{ width: newWidth + '%', paddingTop: newHeight + '%' }} className="motionlevel-component">
        <Motion
          defaultStyle={{ y : this.props.oldLevel.level }}
          style={{ y : spring(percentage, wobble) }}>
          {
            (style) => <Waterlevel width={width} style={style} />
          }
        </Motion>
      </div>
    );
  }
}

MotionLevelComponent.displayName = 'Level';

MotionLevelComponent.propTypes = {
  storage: React.PropTypes.number,
  newLevel: React.PropTypes.object.isRequired,
  oldLevel: React.PropTypes.object
};
MotionLevelComponent.defaultProps = {
  width: 1,
  height: .618,
  oldLevel: { level : 0 }
};

export default MotionLevelComponent;
