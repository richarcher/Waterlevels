/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GoogleMap from 'google-map-react';
import MapPointer from 'components/presentation/MapPointerComponent';
import Map from 'components/presentation/MapComponent.js';

function mockItem(overrides) {
  let target = {};
  let defaults = {
  }
  Object.assign(target, defaults, overrides);
  return target;
}

describe('<Map />', () => {

  describe('when initializing the component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Map />);
    });

    it('renders a <GoogleMap />', () => {
      let map = wrapper.find(GoogleMap);
      expect(map).to.have.length(1);
    });

    it('renders a <MapPointer />', () => {
      let mappointer = wrapper.find(MapPointer);
      expect(mappointer).to.have.length(1);
    });

    it('assigns default properties', () => {
      expect(wrapper.prop('center')).to.deep.equal({ lat: null, lng: null });
      expect(wrapper.prop('zoom')).to.equal(11);
    });

    it('assigns the center prop to state', () => {
      expect(wrapper.state().center).to.deep.equal({ lat: null, lng: null });
    });

  });

});
