import moxios from 'moxios';
import _ from 'lodash';
global._ = global._ || _;
global.deepFreeze = require('deep-freeze');

import sinon from 'sinon';
const SPECIAL_CHARACTERS = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

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

  global.matchText = (text) => {
    const clean = _.toString(text).replace(SPECIAL_CHARACTERS, '\\$&');
    const regex = new RegExp(clean, 'i');
    return w => regex.test(w.text());
  };

  moxios.requestData = function(index=0) {
    const requestData = _.get(this.requests.at(index), 'config.data');
    try {
      return JSON.parse(requestData);
    } catch (e) {
      return requestData;
    }
  }

  global.mockAxios = () => {
    beforeEach(function() {
      moxios.install();
    });

    afterEach(function() {
      moxios.uninstall();
    });
  }
}
