module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class ControllerNameController extends Nodal.Controller {

    get() {

      this.render(
        Nodal.Template.generate('layout.html', 'index.html').render(
          this.params,
          {
            test: this.params.query.test,
            name: 'libtuts-api-server Application'
          }
        )
      );

    }

    post() {

      this.render();

    }

    put() {

      this.render();

    }

    del() {

      this.render();

    }

  }

  return ControllerNameController;

})();
