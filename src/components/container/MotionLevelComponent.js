'use strict';

import React from 'react';
import {Motion, spring} from 'react-motion';

import Waterlevel from '../presentation/WaterLevelComponent';

class MotionLevelComponent extends React.Component {
  render() {

    const {newLevel, largestStorage, width, height} = this.props;
    const wobble = {};
    const percentage = parseInt(newLevel.percentage, 10) / 100;
    const relativeSizeOfDam = largestStorage ? parseInt(newLevel.storage, 10) / largestStorage : 1;
    const targetAreaOfDam = width * relativeSizeOfDam;
    const squareRoot = Math.pow((targetAreaOfDam/width),0.5);

    const newHeight = (squareRoot * height) * 100;
    const newWidth = (squareRoot * width) * 100;
    return (
        <Motion
          defaultStyle={{ y : this.props.oldLevel.level }}
          style={{ y : spring(percentage, wobble) }}>
          {
            (style) => <Waterlevel width={newWidth} height={newHeight} style={style} percentage={percentage} />
          }
        </Motion>
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
