require('normalize.css/normalize.css');

import React from 'react';
import HomePage from './pages/HomePageComponent';

class AppComponent extends React.Component {

  render() {
    return <HomePage />;
  }
}

AppComponent.propTypes = {
};

AppComponent.defaultProps = {
};

export default AppComponent;
