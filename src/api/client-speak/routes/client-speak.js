'use strict';

/**
 * client-speak router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-speak.client-speak');
