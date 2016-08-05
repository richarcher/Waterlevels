'use strict';

import React from 'react';
import Moment from 'moment'

import Map from '../presentation/MapComponent';

require('styles/presentation/MapContainer.scss');

let MapContainerComponent = (props) => (
  <div className='information'>
    <div className='information-summary'>
      <h2>{props.dam.name}</h2>
      <p><abbr title="Global Positioning System">GPS</abbr>: {props.dam.lat}, {props.dam.lng}</p>
      <p>Capacity: <strong>{props.dam.storage}<abbr title="megalitre">Ml</abbr></strong></p>
      <p>Lowest recorded level: <strong>{props.dam.lowest_level.height}%</strong> ({Moment(props.dam.lowest_level.date).format('MMM YYYY')})
      </p>
    </div>
    <div className='information-map'>
      <Map center={{lat: props.dam.lat, lng: props.dam.lng}} coords={{lat: props.dam.lat, lng: props.dam.lng}}/>
    </div>
  </div>
)

MapContainerComponent.displayName = 'PresentationMapContainerComponent';

export default MapContainerComponent;
