/**
 * Copyright (c) 2017 - present, Botfuel (https://www.botfuel.io).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const logger = require('logtown')('View');
const MissingImplementationError = require('../errors/missing-implementation-error');

/**
 * Generic view, to be subclassed.
 */
class View {
  /**
   * Renders a view as an array of json objects.
   * @param userMessage - the user message
   * @param data - data used at display time
   * @returns the messages as an array json objects
   */
  renderAsJson(userMessage, data) {
    logger.debug('renderAsJson', userMessage, data);
    return this.render(userMessage, data).map(msg => msg.toJson(userMessage.user));
  }

  /**
   * Renders a view as an array of bot messages.
   * @param userMessage - the user message
   * @param data - data used at display time
   * @returns an array of bot messages
   */
  render(userMessage, data) { // eslint-disable-line no-unused-vars
    throw new MissingImplementationError();
  }
}

module.exports = View;
