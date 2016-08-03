/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Level from 'components/presentation/MotionLevelComponent.js';

function mockLevel(overrides) {
  let target = {};
  let defaults = {
    percentage: 0
  }
  Object.assign(target, defaults, overrides);
  return target;
}

describe('<Level />', () => {

  describe('when initializing the component', () => {
    let wrapper;
  //
    beforeEach(() => {
      wrapper = shallow(<Level newLevel={mockLevel()} />);
    });
  //
  //   it('renders a <MapPointer />', () => {
  //     let mappointer = wrapper.find(MapPointer);
  //     expect(mappointer).to.have.length(1);
  //   });
  //
    it('assigns default properties', () => {
      console.log(wrapper.props());
      console.log("ABSTRACT MOTION OUT INTO STATELESS PROP");
      // expect(wrapper.props().length).to.equal(3);
      // expect(wrapper.prop('center')).to.deep.equal({ lat: null, lng: null });
      // expect(wrapper.prop('zoom')).to.equal(11);
    });
  //
  //   it('assigns the center prop to state', () => {
  //     expect(wrapper.state().center).to.deep.equal({ lat: null, lng: null });
  //   });
  //
  });

});
