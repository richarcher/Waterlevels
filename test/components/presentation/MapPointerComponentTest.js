/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MapPointer from 'components/presentation/MapPointerComponent';

describe('<MapPointer />', () => {

  describe('when initializing the component', () => {
    it("renders with a component className v1", () => {
      expect(shallow(<MapPointer />).contains(<div className="mappointer-component" />)).to.be.ok;
    });

    it("renders with a component className v2", () => {
      expect(shallow(<MapPointer />).is('.mappointer-component')).to.be.ok;
    });

    it("renders with a component className v3", () => {
      expect(mount(<MapPointer />).find('.mappointer-component').length).to.equal(1);
    });
  });
});
