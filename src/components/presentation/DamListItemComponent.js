'use strict';

import React from 'react';
import { Link } from 'react-router';

import LatestLevel from './LatestLevelComponent';


require('styles/presentation/DamListItem.scss');

class DamListItemComponent extends React.Component {
  render() {
    const fullyVisible = this.props.styles.o === 1;
    return (
      <div className="damitem-component" style={{opacity: this.props.styles.o}}>
        <div>
          <LatestLevel storage={this.props.storage} newLevel={this.props.dam.levels[0]} fullyVisible={fullyVisible} />
        </div>
        <div>
          <span>{this.props.dam.levels[0].percentage}%</span>
          <span><Link to={`/dam/${this.props.dam.id}`}>{this.props.dam.name}</Link></span>
        </div>
      </div>
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
