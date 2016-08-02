'use strict';

import React from 'react';
import * as damApi from '../../actions/dam-api';
import { Link } from 'react-router';
import Moment from 'moment'

import Map from '../presentation/MapContainerComponent';
import LatestLevel from '../presentation/LatestLevelComponent';

require('styles/pages/DamPage.scss');

class DamPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: []
    };
  }

  componentDidMount() {
    damApi.getDamDetail(this.props.params.id).then(response => {
      this.setState({dam: response.dam})
    });
  }

  render() {
    const renderDam = this._renderDam.bind(this);
    const page = this.state.dam ? renderDam() : <div></div>
    return page;
  }

  _renderDam() {
    let dam = this.state.dam;
    let formattedCurrentdate = Moment(dam.levels[0].date).format('DD MMMM YYYY');

    return (
      <div className='dampage-component wrapper'>
        <div>
          <Link to={'/'}>All dams</Link>
          <h1>{dam.name} - <span>{formattedCurrentdate}</span></h1>
        </div>
        <div className='row u-vtop'>
          <div className='col'>
            <LatestLevel newLevel={dam.levels[0]} />
          </div>
          <div className='col'>
            <h1>The equivalent of:</h1>
              <ul>
                <li>[xxxxxxxx] Cups of Artisinal Coffee</li>
                <li>[xxxxxx] Baths</li>
                <li>[xxxx] Olympic sized swimming pools</li>
              </ul>
          </div>
        </div>
        <div className='slider'>
          <p>Drag the slider to see how the water level has changed over time.</p>
          <input type='slider' />
        </div>
        <div className='sparkline'>
          [sparkline]
        </div>

        <Map dam={dam} />

      </div>
    )
  }
}

DamPageComponent.displayName = 'DamPage';

DamPageComponent.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default DamPageComponent;
