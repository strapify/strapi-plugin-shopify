'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/shopify/auth',
    handler: 'auth.init',
    config: {
      auth: false,
      prefix: '',
      policies: ['plugin::shopify.valid-query-hmac'],
    },
  },
  {
    method: 'GET',
    path: '/shopify/auth/callback',
    handler: 'auth.callback',
    config: {
      auth: false,
      prefix: '',
      policies: ['plugin::shopify.valid-query-hmac'],
    },
  },
  {
    method: 'POST',
    path: '/shopify/auth/logout',
    handler: 'auth.logout',
    config: {
      prefix: '',
      policies: ['plugin::shopify.is-authenticated'],
    },
  },
];
