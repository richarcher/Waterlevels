import axios from 'axios';
import config from 'config';

export function getDamSummary() {
  return axios.get(`${config.hostName}/api/v1/dams`)
    .then(response => response.data);
}
export function getDamDetail(id) {
  return axios.get(`${config.hostName}/api/v1/dams/${id}`)
    .then(response => response.data);
}
