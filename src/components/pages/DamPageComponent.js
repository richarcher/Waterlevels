'use strict';

import React from 'react';
import * as damApi from '../../actions/dam-api';
import { Link } from 'react-router';

import LatestLevel from '../presentation/LatestLevelComponent';

require('styles/pages/DamPage.scss');

class DamPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: []
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
        <div className='dampage-component'>
          <div>
            <Link to={'/'}>All dams</Link>
            <h1>Dam: {params.id} <span>29 July 2016</span></h1>
          </div>
          <div className='row u-vtop'>
            <div className='col'>
              <LatestLevel newLevel={this.state.levels[0]} />
            </div>
            <div className='col'>
              <h1>The equivalent of:</h1>
                <ul>
                  <li>nnnnnnnnnnnnn Cups of Artisinal Coffee</li>
                  <li>nnnnnnn Baths</li>
                  <li>nnnn Olympic sized swimming pools</li>
                </ul>
            </div>
          </div>
          <div className='slider'>
            <p>Drag the slider to see how the water level has changed over time.</p>
            <input type='slider' />
          </div>
          <div className='sparkline'>
            [sparkline]
          </div>
          <div className='information'>
            <div className='information-summary'>
              <h2>[Dam Name]</h2>
              <p>location: 12345n, 12345E</p>
              <p>Address</p>
              <p>Capacity:</p>
              <p>Lowest recorded level: 20% (march 2014)</p>
            </div>
            <div className='information-map'></div>
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

DamPageComponent.displayName = 'PagesDamPageComponent';

DamPageComponent.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default DamPageComponent;
