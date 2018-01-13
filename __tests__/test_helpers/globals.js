import _ from 'lodash';
global._ = global._ || _;

import sinon from 'sinon';

export default globalSetup = () => {
  global.sinon = {
    stub: function() {
      throw new Error('call this.sinon.stub instead');
    },

    spy: function() {
      throw new Error('call this.sinon.spy instead');
    }
  };

  beforeEach(function() {
    this.sinon = sinon.sandbox.create({ properties: ["spy", "stub"]});
  });

  afterEach(function() {
    sinon.sandbox.restore();
  });
}
