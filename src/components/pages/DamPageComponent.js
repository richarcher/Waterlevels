'use strict';

import React from 'react';
import * as damApi from '../../actions/dam-api';
import { Link } from 'react-router';
import Moment from 'moment'

import Map from '../presentation/MapContainerComponent';
import MotionLevel from '../container/MotionLevelComponent';
import Sparkline from '../presentation/SparklinesComponent';
import Slider from '../presentation/SliderComponent';

require('styles/pages/DamPage.scss');

class DamPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    damApi.getDamDetail(this.props.params.id).then(response => {
      this.setState({dam: response.dam, currentDam: response.dam.levels[0]})
    });
  }

  render() {
    const renderDam = this._renderDam.bind(this);
    const page = this.state.dam ? renderDam() : <div></div>
    return page;
  }

  _renderDam() {
    const dam = this.state.dam;
    const formattedCurrentdate = Moment(this.state.currentDam.date).format('DD MMMM YYYY');

    const handleSliderChange = this._handleSliderChange.bind(this);

    const currentStorage = this._currentStorage.bind(this);
    const equivalent = this._equivalent.bind(this);

    return (
      <div className='dampage-component wrapper'>
        <div>
          <Link to={'/'}>All dams</Link>
          <h1>{dam.name} - <span>{formattedCurrentdate}</span></h1>
        </div>
        <div className='row u-vtop'>
          <div className='col'>
            <MotionLevel newLevel={this.state.currentDam} />
          </div>
          <div className='col'>
            <h2>Current capacity: {currentStorage(this.state.currentDam)}Ml</h2>
            <h2>The equivalent of:</h2>
              <ul>
                <li>{equivalent(0.00000047, currentStorage(this.state.currentDam))} Cups of Artisinal Coffee</li>
                <li>{equivalent(0.00008, currentStorage(this.state.currentDam))} Baths</li>
                <li>{equivalent(2.5, currentStorage(this.state.currentDam))} Olympic sized swimming pools</li>
              </ul>
          </div>
        </div>

        <Slider levels={this.state.dam.levels} handleChange={handleSliderChange} />

        <Sparkline levels={this.state.dam.levels} />

        <Map dam={dam} />

      </div>
    )
  }

  _handleSliderChange(value) {
    const index = (this.state.dam.levels.length-1) - value;
    this.setState({currentDam : this.state.dam.levels[index] });
  }

  _currentStorage(level) {
    const percentage = parseInt(level.percentage, 10) / 100;
    return (level.storage * percentage).toFixed(2);
  }

  _equivalent(singleUnit, total) {
    return (total/ singleUnit).toFixed(0);
  }
}

DamPageComponent.displayName = 'DamPage';

DamPageComponent.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default DamPageComponent;
