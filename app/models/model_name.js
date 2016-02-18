module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class ModelName extends Nodal.Model {}

  ModelName.setDatabase(Nodal.require('db/main.js'));
  ModelName.setSchema(Nodal.my.Schema.models.ModelName);

  return ModelName;

})();
