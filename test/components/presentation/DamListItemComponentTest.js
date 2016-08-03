/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Link } from 'react-router';

import Dam from 'components/presentation/DamListItemComponent';
import MotionLevel from 'components/presentation/MotionLevelComponent';

describe('<Dam />', () => {

  describe('when initializing the component', () => {
    let wrapper;
    let mockDam = {
      id: 1,
      name: 'Fake Dam Name',
      levels: [{
        percentage: "99"
      }]
    }
    let mockStorage = 300000;

    beforeEach(() => {
      wrapper = shallow(<Dam dam={mockDam} storage={mockStorage} />);
    });

    it("renders with a component className", () => {
      expect(wrapper.find('.damitem-component')).to.have.length(1);
    });

    it('should render a <MotionLevel /> component with storage and newLevel props', () => {
      let ll = wrapper.find(MotionLevel);
      expect(ll).to.have.length(1);
      expect(ll.props().storage).to.equal(mockStorage);
      expect(ll.props().newLevel).to.deep.equal(mockDam.levels[0]);
    });

    it('renders the dam capacity parcentage', () => {
      expect(wrapper.find('.damitem-percentage').text()).to.equal(`${mockDam.levels[0].percentage}%`);
    });

    it('renders the dam name', () => {
      expect(wrapper.find('.damitem-name').text()).to.equal(mockDam.name);
    });

  });
});
