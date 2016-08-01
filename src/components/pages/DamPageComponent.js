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
      let formattedCurrentdate = Moment(dam.levels[0].date).format('DD MMMM YYYY');

      return (
        <div className='dampage-component'>
          <div>
            <Link to={'/'}>All dams</Link>
            <h1>{dam.name} - <span>{formattedCurrentdate}</span></h1>
          </div>
          <div className='row u-vtop'>
            <div className='col'>
              <LatestLevel newLevel={dam.levels[0]} />
            </div>
            <div className='col'>
              <h1>The equivalent of:</h1>
                <ul>
                  <li>[xxxxxxxx] Cups of Artisinal Coffee</li>
                  <li>[xxxxxx] Baths</li>
                  <li>[xxxx] Olympic sized swimming pools</li>
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
              <h2>{dam.name}</h2>
              <p><abbr title="Global Positioning System">GPS</abbr>: {dam.lat}, {dam.lng}</p>
              <p>Capacity: <strong>{dam.storage}<abbr title="megalitre">Ml</abbr></strong></p>
              <p>Lowest recorded level: <strong>{dam.lowest_level.height}%</strong> ({formattedLowestDate})</p>
            </div>
            <div className='information-map'>
              <Map center={{lat: dam.lat, lng: dam.lng}} coords={{lat: dam.lat, lng: dam.lng}}/>
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
