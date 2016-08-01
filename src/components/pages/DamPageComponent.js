'use strict';

import React from 'react';
import * as damApi from '../../actions/dam-api';
import { Link } from 'react-router';
import Moment from 'moment'

import LatestLevel from '../presentation/LatestLevelComponent';
import Map from '../presentation/MapComponent';

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
      this.setState({dam: response.dam})
    });
  }

  render() {
    if (this.state.dam) {
      let dam = this.state.dam;
      let params = this.props.params;
      let formattedLowestDate = Moment(dam.lowest_level.date).format('MMM YYYY');

      return (
        <div className='dampage-component'>
          <div>
            <Link to={'/'}>All dams</Link>
            <h1>Dam: {params.id} <span>29 July 2016</span></h1>
          </div>
          <div className='row u-vtop'>
            <div className='col'>
              <LatestLevel newLevel={dam.levels[0]} />
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
              <p>Capacity: <strong>{dam.storage}<abbr title="megalitre">Ml</abbr></strong></p>
              <p>Lowest recorded level: <strong>{dam.lowest_level.height}% ({formattedLowestDate})</strong></p>
            </div>
            <div className='information-map'>
              <Map center={{lat: -34.027245, lng: 19.208895}} coords={{lat: -34.027245, lng: 19.208895}}/>
            </div>
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
