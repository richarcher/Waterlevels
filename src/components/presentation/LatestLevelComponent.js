'use strict';

import React from 'react';
import {Motion, spring} from 'react-motion';

require('styles/presentation/LatestLevel.scss');

class LatestLevelComponent extends React.Component {
  render() {
    let level = this.props.level;
    let percentage = parseInt(level.percentage, 10) / 100;
    let tenth = parseInt(level.percentage, 10) / 10;
    let wobble = {stiffness: 100, damping: tenth };
    // let relativeSize = 1;
    let relativeSize = parseInt(level.storage,10) / 190878;
    console.log(level.storage)

    return (
      <div style={{ width: this.props.width, height: this.props.height*relativeSize }} className="latestlevel-component">
        <Motion
          defaultStyle={{
            y : 0,
            opacity : 0
          }}
          style={{
            y : spring(percentage, wobble),
            opacity : spring( 1, wobble )
          }}>

          {
            style => <div className="inner" style={{transform: `scaleY(${style.y})`, opacity: style.opacity }}></div>
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
  width: 200,
  height: 200,
  level: {}
};

export default LatestLevelComponent;
