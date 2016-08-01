'use strict';

import React from 'react';
import Moment from 'moment'

import Map from '../presentation/MapComponent';

require('styles/presentation/MapContainer.scss');

class MapContainerComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dam = this.props.dam;
    let formattedLowestDate = Moment(dam.lowest_level.date).format('MMM YYYY');
    return (
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
    );
  }
}

MapContainerComponent.displayName = 'PresentationMapContainerComponent';

// Uncomment properties you need
// MapContainerComponent.propTypes = {};
// MapContainerComponent.defaultProps = {};

export default MapContainerComponent;
