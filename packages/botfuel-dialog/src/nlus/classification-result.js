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

const logger = require('logtown')('Intent');
const SdkError = require('../errors/sdk-error');

/** ClassificationResult class */
class ClassificationResult {
  static TYPE_QNA = 'QnA';
  static TYPE_INTENT = 'Intent';

  /**
   * @constructor
   * @param data data receive from trainer api request
   */
  constructor(data) {
    logger.debug('constructor');

    this.type = this.getType(data.type);
    this.label = data.label;
    this.resolvePrompt = data.resolvePrompt;

    const name = data.name || (this.isQnA() ? 'qnas' : data.label);
    if (!name) {
      throw new SdkError('Intent constructor: data must contain label or name');
    }
    this.name = name;

    if (this.isQnA()) {
      this.answers = data.answers;
    }
  }

  /**
   * Parses type from data.
   * @param type - type
   * @returns static TYPE
   */
  getType(type) {
    if (!type) {
      throw new SdkError('Intent constructor: data must contain type');
    }

    switch (type.toLowerCase()) {
      case 'intent': return ClassificationResult.TYPE_INTENT;
      case 'qna': return ClassificationResult.TYPE_QNA;
      default: throw new SdkError(`Intent constructor: invalid intent type: ${type}`);
    }
  }

  /**
   * Returns true if intent is QnA.
   */
  isQnA() {
    return this.type === ClassificationResult.TYPE_QNA;
  }
}

module.exports = ClassificationResult;
