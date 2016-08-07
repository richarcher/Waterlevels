'use strict';

import React from 'react';
import { Link } from 'react-router';

import MotionLevel from '../container/MotionLevelComponent';


require('styles/presentation/DamListItem.scss');

let DamListItemComponent = (props) => {
  return (
    <Link to={`/dams/${props.dam.id}`} className="damitem-component">
      <MotionLevel largestStorage={props.largestStorage} newLevel={props.dam.levels[0]} />
      <div className="damitem-text">
        <span className="damitem-percentage">{props.dam.levels[0].percentage}%</span>
        <span className="damitem-name">{props.dam.name}</span>
      </div>
    </Link>
  )
}

DamListItemComponent.displayName = 'Dam';

DamListItemComponent.propTypes = {
  dam: React.PropTypes.object.isRequired,
  largestStorage: React.PropTypes.number.isRequired
};

export default DamListItemComponent;
