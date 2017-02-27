'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '115.159.122.194',
      port: '3306',
      database: '36kr_cms',
      user: 'dev',
      password: 'dev@kbiao',
      prefix: 'kr_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};