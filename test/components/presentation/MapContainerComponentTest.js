/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MapContainer from 'components/presentation/MapContainerComponent';
import Map from 'components/presentation/MapComponent';

function mockItem(overrides) {
  let target = {};
  let defaults = {
      name: 'Fake dam',
      lowest_level: {
        height: 5,
        date: '2016-07-25T00:00:00.000Z',
        percentage: '5.0000'
      },
      storage: 1000,
      lat: -30,
      lng: 40
  }
  Object.assign(target, defaults, overrides);
  return target;
}

describe('<MapContainer />', () => {

  describe('when initializing the component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MapContainer dam={mockItem()} />);
    });

    it("renders with a component className", () => {
      expect(wrapper.find('.information')).to.have.length(1);
    });

    describe('.information-map', () => {
      it("renders with a component className", () => {
        expect(wrapper.find('.information-map')).to.have.length(1);
      });

      it('should render a <Map /> with center and coords props', () => {
        let map = wrapper.find(Map);
        let expectation = { center: {lat: -30, lng: 40}, coords: {lat: -30, lng: 40} , zoom: 11};
        expect(map).to.have.length(1);
        expect(map.props()).to.deep.equal(expectation);
      });

    });

    describe('.information-summary', () => {
      it("renders with a component className", () => {
        expect(wrapper.find('.information-summary')).to.have.length(1);
      });

      it('renders the dam name in the title', () => {
        expect(wrapper.contains(<h2>Fake dam</h2>)).to.be.ok;
      });

      it('renders the GPS coordinates', () => {
        expect(wrapper.text()).to.contain('GPS: -30, 40');
      });

      it('renders the dam storage', () => {
        expect(wrapper.text()).to.contain('Capacity: 1000Ml');
      });

      it('renders the lowest recorded level', () => {
        expect(wrapper.text()).to.contain('Lowest recorded level: 5.0% (25 Jul 2016)');
      });
    });
  });
});
