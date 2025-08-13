'use strict';

/**
 * client-speak controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client-speak.client-speak');
