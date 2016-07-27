require('normalize.css/normalize.css');

import React from 'react';

class AppComponent extends React.Component {

  render() {
    return <div>
      {this.props.children}
    </div>
  }
}

AppComponent.propTypes = {
  children: React.PropTypes.element.isRequired
};

AppComponent.defaultProps = {
};

export default AppComponent;
