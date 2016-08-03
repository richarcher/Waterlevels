'use strict';

import React from 'react';

require('styles/presentation/WaterLevel.scss');

let WaterLevelComponent = (props) => {
  let percentage = parseInt(props.style.y * 100, 10)
  return (
    <div>
      <div className="counter" style={{fontSize: `${props.width}%`}}>{percentage}%</div>
      <div className="inner" style={{transform: `scaleY(${props.style.y})` }}></div>
    </div>
  );
}

WaterLevelComponent.displayName = 'WaterLevel';

WaterLevelComponent.propTypes = {
  width: React.PropTypes.number.isRequired,
  style: React.PropTypes.object.isRequired
};

export default WaterLevelComponent;
