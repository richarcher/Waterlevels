'use strict';

import React from 'react';
import * as damApi from '../../actions/dam-api';

import LatestLevel from '../presentation/LatestLevelComponent';

require('styles/pages/DamPage.scss');

class DamPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: props.levels
    };
  }

  componentDidMount() {
    damApi.getDamDetail(this.props.params.id).then(response => {
      this.setState({levels: response.levels})
    });
  }

  render() {
    if (this.state.levels.length) {
      const params = this.props.params;
      return (
        <div className="dampage-component">
          <h1>Dam: {params.id}</h1>
          <LatestLevel level={this.state.levels[0]} />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

DamPageComponent.displayName = 'PagesDamPageComponent';

DamPageComponent.propTypes = {
  levels: React.PropTypes.array
};
DamPageComponent.defaultProps = {
  levels: []
};

export default DamPageComponent;
