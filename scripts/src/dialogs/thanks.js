'use strict';

const Dialog = require('./dialog');

class Thanks extends Dialog {
  execute(dm) {
    dm.respond("Thanks!");
    return Promise.resolve();
  }
}

module.exports = Thanks;