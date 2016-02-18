module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateModelName extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021722543482;
    }

    up() {

      return [
        this.createTable("model_names", [])
      ];

    }

    down() {

      return [
        this.dropTable("model_names")
      ];

    }

  }

  return CreateModelName;

})();
