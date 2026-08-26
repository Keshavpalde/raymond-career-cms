'use strict';

/**
 * apply-now service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::apply-now.apply-now');
