/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Level from 'components/container/MotionLevelComponent.js';
import Waterlevel from 'components/presentation/WaterLevelComponent.js';
import {Motion, spring} from 'react-motion';

describe('<Level />', () => {

  let wrapper;
  const mockStorage = 1000;
  const mockLevel = {
    percentage: "64.4",
    storage: "640"
  };

    it('renders the Motion Component', () => {
      wrapper = shallow(<Level newLevel={mockLevel} storage={mockStorage} />);
      expect( wrapper.find(Motion) ).to.have.length(1);
      expect( wrapper.prop('defaultStyle' )).to.be.defined;
      expect( wrapper.prop('style' )).to.be.defined;
    });


});
