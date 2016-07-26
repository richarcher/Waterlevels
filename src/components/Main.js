require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
import axios from 'axios';
import config from 'config';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ready: false,
        dams: props.dams
    };
  }

  componentDidMount() {
    var _this = this;
    axios.get(`${config.hostName}/api/v1/dams`).then(function(response) {
      _this.setState({ready: true, dams: response.data.dams})
    });
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }

}
AppComponent.propTypes = {
  dams: React.PropTypes.array
};

AppComponent.defaultProps = {
  dams: []
};

export default AppComponent;
