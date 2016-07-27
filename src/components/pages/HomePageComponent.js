'use strict';

import React from 'react';
import { constant, range } from 'lodash';
import { StaggeredMotion, spring } from 'react-motion';
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
    if (this.state.dams.length) {
      return this.renderDams();
    } else {
      return <div></div>
    }
  }

  renderDams() {
    return (
      <div className="homepage-component">
      <section>
        <h1>Cape Town water levels</h1>
        <ol>
          { this.animateDamItem() }
        </ol>
      </section>
      </div>
    );
  }

  animateDamItem() {
    const storage = Math.max.apply(Math, this.state.dams.map(function( o ){ return o.levels[0].storage; }));
    const firstStyles = range(this.state.dams.length).map(constant( { o: 0 }));
    const otherStyles = (prevInterpolatedStyles) => {
      return prevInterpolatedStyles.map((_, i) => {
        return i === 0 ? { o: spring(1) } : { o: spring(prevInterpolatedStyles[i - 1].o) };
      })
    };

    return (
      <StaggeredMotion defaultStyles={firstStyles} styles={otherStyles}>
        {(interpolatingStyles) => {
          return <div>
          {interpolatingStyles.map((otherStyles, i) => {

            return this.createDamItem(this.state.dams[i], otherStyles, storage)

          })}
          </div>;
        }}
      </StaggeredMotion>
    );
  }

  createDamItem(dam, styles, storage) {
    return <DamListItem key={dam.id} dam={dam} styles={styles} storage={storage} />;
  }
}

HomePageComponent.displayName = 'HomePageComponent';

export default HomePageComponent;
