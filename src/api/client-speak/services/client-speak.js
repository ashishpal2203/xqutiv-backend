'use strict';

/**
 * client-speak service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-speak.client-speak');
