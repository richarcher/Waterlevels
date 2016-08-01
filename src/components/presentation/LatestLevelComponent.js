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
    const relativeSize = this.props.storage ? parseInt(level.storage,10) / this.props.storage : 1;
    const targetArea = props.width*relativeSize;
    const squareRoot = Math.pow((targetArea/props.width),0.5);
    const newHeight = (squareRoot * props.height) * 100;
    const newWidth = (squareRoot * props.width) * 100;

    return (
      <div style={{ width: newWidth + '%', paddingTop: newHeight + '%' }} className="latestlevel-component">
        { this.renderAnimation(percentage, wobble, newWidth) }
      </div>
    );
  }

  renderAnimation(percentage, wobble, newWidth) {
    return (
      <Motion
        defaultStyle={{
          y : this.props.oldLevel.level
        }}
        style={{
          y : spring(percentage, wobble)
        }}>
        {
          style => (
            <div>
              <div className="counter" style={{fontSize: `${parseInt(newWidth * 7, 10)}%`}}>{parseInt(style.y * 100, 10)}%</div>
              <div className="inner" style={{transform: `scaleY(${style.y})` }}></div>
            </div>
          )
        }
      </Motion>
    );
  }
}

LatestLevelComponent.displayName = 'LatestLevelComponent';

LatestLevelComponent.propTypes = {
  storage: React.PropTypes.number,
  newLevel: React.PropTypes.object.isRequired,
  oldLevel: React.PropTypes.object
};
LatestLevelComponent.defaultProps = {
  width: 1,
  height: .618,
  oldLevel: { level : 0 }
};

export default LatestLevelComponent;
