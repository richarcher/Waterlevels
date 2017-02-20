'use strict';

import React from 'react';

require('styles/presentation/WaterLevel.scss');

let WaterLevelComponent = (props) => {
  const fontsize = parseInt(props.width * 5, 10)
  const percentageFormatter = `${(props.percentage * 100).toFixed(1)}%`
  return (
    <div className="waterlevel-component" style={{ width: props.width + '%', paddingTop: props.height + '%' }}>
      <div className="counter" style={{fontSize: `${fontsize}%`}}>{percentageFormatter}</div>
      <div className="inner" style={{transform: `scaleY(${props.style.y})` }}></div>
    </div>
  );
}

WaterLevelComponent.displayName = 'WaterLevel';

WaterLevelComponent.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  percentage: React.PropTypes.number.isRequired,
  style: React.PropTypes.object.isRequired
};

export default WaterLevelComponent;
