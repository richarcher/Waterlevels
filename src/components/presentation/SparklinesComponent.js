'use strict';

import React from 'react';
import { Sparklines, SparklinesLine  } from 'react-sparklines';

require('styles/presentation/Sparklines.scss');

class SparklinesComponent extends React.Component {

  render() {

    const sampleData = this.props.levels.map(d => d.percentage);

    return (
      <div className='sparkline'>
        <Sparklines data={sampleData} preserveAspectRatio={'xMidYMid'} height={30} min={0}>
          <SparklinesLine style={{ stroke: '#87ceeb', strokeWidth:.3, fill: 'none' }} />
        </Sparklines>
      </div>
    );
  }
}

SparklinesComponent.displayName = 'PresentationSparklinesComponent';

// Uncomment properties you need
// SparklinesComponent.propTypes = {};
// SparklinesComponent.defaultProps = {};

export default SparklinesComponent;
