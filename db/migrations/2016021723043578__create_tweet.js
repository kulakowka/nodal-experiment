module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTweet extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021723043578;
    }

    up() {

      return [
        this.createTable("tweets", [{"name":"user_id","type":"int"},{"name":"body","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("tweets")
      ];

    }

  }

  return CreateTweet;

})();
