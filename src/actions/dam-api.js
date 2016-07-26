import axios from 'axios';
import config from 'config';

export function getDamSummary() {
  return axios.get(`${config.hostName}/api/v1/dams`)
    .then(response => response.data);
}


// var _this = this;
// axios.get(`${config.hostName}/api/v1/dams`).then(function(response) {
//   _this.setState({ dams: response.data.dams })
// });
