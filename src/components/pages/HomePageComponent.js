'use strict';

import React from 'react';
import DamItem from '../presentation/DamItemComponent';
import * as damApi from '../../actions/dam-api';

require('styles/pages/HomePage.scss');

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dams: this.props.dams
    };
  }

  componentDidMount() {
    damApi.getDamSummary().then(response => {
      this.setState({dams: response.dams})
    });
  }

  render() {
    return (
      <div className="homepage-component">
        <section>
          <h1>Cape Town water levels</h1>
          <ol>
            { this.state.dams.map(this.createDamItem) }
          </ol>
        </section>
      </div>
    );
  }

  createDamItem(dam) {
    return <DamItem key={dam.id} dam={dam} />;
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
