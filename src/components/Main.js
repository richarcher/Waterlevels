require('normalize.css/normalize.css');

import React from 'react';
import { RouteTransition } from 'react-router-transition'

class AppComponent extends React.Component {

  render() {
    return <div>
    <RouteTransition
      pathname={this.props.location.pathname}
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
      {this.props.children}
    </RouteTransition>
    </div>
  }
}

AppComponent.propTypes = {
  children: React.PropTypes.element.isRequired
};

AppComponent.defaultProps = {
};

export default AppComponent;
