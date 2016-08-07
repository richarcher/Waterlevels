require('normalize.css/normalize.css');

import React from 'react';

require('styles/App.scss');

class AppComponent extends React.Component {

  render() {
    return <div className="app">{this.props.children}</div>
  }
}

AppComponent.propTypes = {
  children: React.PropTypes.element.isRequired
};

AppComponent.defaultProps = {
};

export default AppComponent;
