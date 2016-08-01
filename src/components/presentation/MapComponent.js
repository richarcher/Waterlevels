'use strict';

import React from 'react';
import GoogleMap from 'google-map-react';

import MapPointer from './MapPointerComponent';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center
    };
  }

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyCTvhzXM-Tfsaf3fcvniqrAAN8sEr0EqDI'}}
        center={this.state.center}
        zoom={this.props.zoom}
        onChange={this._handleChange}>
        <MapPointer {...this.props.coords} text={'0'} />
      </GoogleMap>
    );
  }

  _handleChange = ({bounds, size}) => {
    let lngOffset = (size.width * .3) * (bounds.nw.lng - bounds.se.lng) / size.width;
    this.setState({
      center: {lat: parseFloat(this.props.coords.lat), lng: parseFloat(this.props.coords.lng - lngOffset)}
    });
  }
}

MapComponent.displayName = 'PresentationMapComponent';

MapComponent.propTypes = {
  center: React.PropTypes.object.isRequired,
  zoom: React.PropTypes.number,
  coords: React.PropTypes.object.isRequired
};

MapComponent.defaultProps = {
  center: {lat: null, lng: null},
  zoom: 11,
  coords: {lat: null, lng: null}
};

export default MapComponent;
