module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const ModelName = Nodal.require('app/models/model_name.js');

  class ModelNamesController extends Nodal.Controller {

    index() {

      ModelName.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      ModelName.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      ModelName.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      ModelName.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      ModelName.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return ModelNamesController;

})();
