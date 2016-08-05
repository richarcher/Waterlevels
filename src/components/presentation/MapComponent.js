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
    const handleChange = this._handleChange.bind(this);
    return (
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyCTvhzXM-Tfsaf3fcvniqrAAN8sEr0EqDI'}}
        center={this.state.center}
        zoom={this.props.zoom}
        onChange={handleChange}>
        <MapPointer {...this.props.coords} />
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

MapComponent.displayName = 'Map';

MapComponent.propTypes = {
  center: React.PropTypes.object.isRequired,
  coords: React.PropTypes.object.isRequired,
  zoom: React.PropTypes.number
};

MapComponent.defaultProps = {
  center: {lat: null, lng: null},
  coords: {lat: null, lng: null},
  zoom: 11
};

export default MapComponent;
