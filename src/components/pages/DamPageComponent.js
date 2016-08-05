'use strict';

import React from 'react';
import * as damApi from '../../actions/dam-api';
import { Link } from 'react-router';
import Moment from 'moment'

import Map from '../presentation/MapContainerComponent';
import MotionLevel from '../container/MotionLevelComponent';
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
            <h1>The equivalent of:</h1>
              <ul>
                <li>[xxxxxxxx] Cups of Artisinal Coffee</li>
                <li>[xxxxxx] Baths</li>
                <li>[xxxx] Olympic sized swimming pools</li>
              </ul>
          </div>
        </div>


        <div className='sparkline'>
          [sparkline]
        </div>

        <Slider levels={this.state.dam.levels} handleChange={handleSliderChange} />

        <Map dam={dam} />

      </div>
    )
  }

  _handleSliderChange(value) {
    const index = (this.state.dam.levels.length-1) - value;
    this.setState({currentDam : this.state.dam.levels[index] });
  }
}

DamPageComponent.displayName = 'DamPage';

DamPageComponent.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default DamPageComponent;
