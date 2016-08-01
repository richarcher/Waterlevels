'use strict';

import React from 'react';

require('styles/presentation/MapPointer.scss');

class MapPointerComponent extends React.Component {
  render() {
    return (
      <div className="mappointer-component">
        {this.props.text}
      </div>
    );
  }
}

MapPointerComponent.displayName = 'PresentationMapPointerComponent';

// Uncomment properties you need
// MapPointerComponent.propTypes = {};
// MapPointerComponent.defaultProps = {};

export default MapPointerComponent;
