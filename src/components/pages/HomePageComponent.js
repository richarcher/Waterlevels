'use strict';

import React from 'react';
// import { constant, range } from 'lodash';
// import { StaggeredMotion, spring } from 'react-motion';
import * as damApi from '../../actions/dam-api';

import DamListItem from '../presentation/DamListItemComponent';

require('styles/pages/HomePage.scss');

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dams: []
    };
  }

  componentDidMount() {
    damApi.getDamSummary().then(response => {
      response.dams.sort((a, b) => b.levels[0].storage - a.levels[0].storage);
      this.setState({dams: response.dams})
    });
  }

  render() {
    const renderDams = this._renderDams.bind(this);
    const page = this.state.dams.length ? renderDams() : <div></div>
    return page;
  }

  _renderDams() {
    const storage = Math.max.apply( Math, this.state.dams.map( function( o ) { return o.storage; } ) )

    return (
      <div className="homepage-component wrapper">
        <section>
          <h1>Cape Town water levels</h1>
          <div>
            { this.state.dams.map((_,i) => {
                return <DamListItem key={this.state.dams[i].id}
                                    dam={this.state.dams[i]}
                                    storage={storage} />
            })}
          </div>
        </section>
      </div>
    );
  }
}

HomePageComponent.displayName = 'HomePage';

export default HomePageComponent;
