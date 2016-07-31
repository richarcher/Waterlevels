'use strict';

import React from 'react';
import { Link } from 'react-router';

import LatestLevel from './LatestLevelComponent';


require('styles/presentation/DamListItem.scss');

class DamListItemComponent extends React.Component {
  render() {
    return (
      <Link to={`/dam/${this.props.dam.id}`} className="damitem-component" style={{opacity: this.props.styles.o}}>
        <div>
          <LatestLevel storage={this.props.storage} newLevel={this.props.dam.levels[0]} />
        </div>
        <div>
          <span>{this.props.dam.levels[0].percentage}%</span>
          <span>{this.props.dam.name}</span>
        </div>
      </Link>
    );
  }
}

DamListItemComponent.displayName = 'DamListItemComponent';

DamListItemComponent.propTypes = {
  dam: React.PropTypes.object.isRequired,
  styles: React.PropTypes.object.isRequired,
  storage: React.PropTypes.number.isRequired
};

export default DamListItemComponent;
