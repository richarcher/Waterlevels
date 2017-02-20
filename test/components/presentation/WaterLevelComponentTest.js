/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Waterlevel from 'components/presentation/WaterLevelComponent';

describe('<Waterlevel />', () => {

  describe('when initializing the component', () => {
    let wrapper;
    let mockStyle = { y: .5 };
    let mockWidth = 100;
    let mockHeight = 61;
    let mockPercentage = .5

    beforeEach(() => {
      wrapper = shallow(<Waterlevel width={mockWidth} height={mockHeight} percentage={mockPercentage} style={mockStyle}/>);
    });

    it('renders a font-size attribute', () => {
      expect(wrapper.find('.waterlevel-component').prop('style')).to.deep.equal({ width: '100%', paddingTop: '61%' });
    });

    it('renders a percentage', () => {
      expect(wrapper.find('.counter').text()).to.equal('50.0%');
    });

    it('renders a font-size attribute', () => {
      expect(wrapper.find('.counter').prop('style')).to.deep.equal({ fontSize: '500%' });
    });

    it('renders a scale attribute', () => {
      expect(wrapper.find('.inner').prop('style')).to.deep.equal({ transform: 'scaleY(0.5)' });
    });
  });
});
