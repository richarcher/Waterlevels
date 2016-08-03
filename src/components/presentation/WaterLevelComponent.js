'use strict';

import React from 'react';

require('styles/presentation/WaterLevel.scss');

let WaterLevelComponent = (props) => {
  let percentage = parseInt(props.style.y * 100, 10);
  let fontsize = parseInt(props.width * 7, 10)
  return (
    <div className="waterlevel-component" style={{ width: props.width + '%', paddingTop: props.height + '%' }}>
      <div className="counter" style={{fontSize: `${fontsize}%`}}>{percentage}%</div>
      <div className="inner" style={{transform: `scaleY(${props.style.y})` }}></div>
    </div>
  );
}

WaterLevelComponent.displayName = 'WaterLevel';

WaterLevelComponent.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  style: React.PropTypes.object.isRequired
};

export default WaterLevelComponent;
