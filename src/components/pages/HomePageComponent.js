'use strict';

import React from 'react';
import { constant, range } from 'lodash';
import { StaggeredMotion, spring } from 'react-motion';
import * as damApi from '../../actions/dam-api';

import DamItem from '../presentation/DamItemComponent';

require('styles/pages/HomePage.scss');

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dams: props.dams
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
      const firstStyles = range(this.state.dams.length).map(constant( { o: 0 }));
      const otherStyles = (prevInterpolatedStyles) => {
        return prevInterpolatedStyles.map((_, i) => {
          return i === 0
          // Initial stiffness and damping
          ? { o: spring(1) }
          // Final stiffness and damping
          : { o: spring(prevInterpolatedStyles[i - 1].o) };
        })};

        return (
          <div className="homepage-component">
          <section>
            <h1>Cape Town water levels</h1>
            <ol>
              <StaggeredMotion defaultStyles={firstStyles} styles={otherStyles}>
                {(interpolatingStyles) => {
                  return <div>
                  {interpolatingStyles.map((otherStyles, i) => {
                    return this.createDamItem(this.state.dams[i], otherStyles)
                  })}
                  </div>;
                }}
              </StaggeredMotion>
            </ol>
          </section>
          </div>
        );
    } else {
      return <div></div>
    }
  }

  createDamItem(dam, styles) {
    return <DamItem key={dam.id} dam={dam} styles={styles} />;
  }
}

HomePageComponent.displayName = 'HomePageComponent';

HomePageComponent.propTypes = {
  dams: React.PropTypes.array
};

HomePageComponent.defaultProps = {
  dams: []
};

export default HomePageComponent;
