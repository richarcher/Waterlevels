'use strict';

import React from 'react';
import LatestLevel from './LatestLevelComponent';

require('styles/presentation/DamItem.scss');

class DamItemComponent extends React.Component {
  render() {
    return (
      <div className="damitem-component">
        <div>
          <LatestLevel level={this.props.dam.levels[0]} />
        </div>
        <div>
          <span>{this.props.dam.name}</span>
          <span>{this.props.dam.levels[0].percentage}%</span>
        </div>
      </div>
    );
  }
}

DamItemComponent.displayName = 'DamItemComponent';

DamItemComponent.propTypes = {
  dam: React.PropTypes.object
};
DamItemComponent.defaultProps = {
  dam: {}
};

export default DamItemComponent;
