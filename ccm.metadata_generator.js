/**
 * @overview ccm metadata generator to create metadata of components
 * @author Leon Eck <leon.eck@smail.inf.h-brs.de> 2018
 * @license The MIT License (MIT)
 */

{

  var component = {

    /**
     * unique component name
     * @type {string}
     */
    name: 'metadata_generator',

    /**
     * recommended used framework version
     * @type {string}
     */
    ccm: 'js/ccm-16.3.0.js',

    /**
     * default instance configuration
     * @type {object}
     */
    config: {
      html: {
        "main": {
          "id": "main",
          "class": "container",
          "inner": [
            {
              "inner": `
              <div class="row">
                <div class="col-xs-12">
                  <h1>Metadata Generator</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <div class="panel panel-primary">
                    <div class="panel-heading">
                      <h3 class="panel-title">License</h3>
                    </div>
                    <div class="panel-body">
                      
                    </div>
                  </div>
                </div>
              </div>
              `
            }
          ]
        }
      },
      css: [ 'ccm.load', 'css/bootstrap.min.css', 'css/default.css' ],
      //display_final_metadata: true, // If set to false, nothing will be displayed after generating the new metadata
      no_bootstrap_container: false // Set to true if embedded on a site that already has a bootstrap container div
    },

    /**
     * for creating instances of this component
     * @constructor
     */
    Instance: function() {

      /**
       * own reference for inner functions
       * @type {Instance}
       */
      const self = this;

      /**
       * Stores the generated metadata
       * @type {{}}
       */
      let generatedMetadata = {

      };

      /**
       * starts the instance
       * @param {function} [callback] - called after all synchronous and asynchronous operations are complete
       */
      this.start = callback => {

        /**
         * Remove the bootstrap container class if config value no_bootstrap_container is true
         */
        if (self.no_bootstrap_container) {
          this.html.main.class = '';
        }

        const mainElement = this.ccm.helper.html(this.html.main, {
        });



        this.element.appendChild(mainElement);



        // https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
        function objectByString(o, s) {
          s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
          s = s.replace(/^\./, '');           // strip a leading dot
          let a = s.split('.');
          for (let i = 0, n = a.length; i < n; ++i) {
            let k = a[i];
            if (k in o) {
              o = o[k];
            } else {
              return;
            }
          }
          return o;
        }

        // https://stackoverflow.com/questions/18936915/dynamically-set-property-of-nested-object
        function setNewConfigValue(path, value) {
          let schema = loadedComponent.config;
          let pList = path.split('.');
          let len = pList.length;
          for(let i = 0; i < len-1; i++) {
            let elem = pList[i];
            schema = objectByString(schema, elem);
          }

          schema[pList[len-1]] = value;
        }

        if ( callback ) callback();
      };

      /**
       * Returns the new metadata of the component
       * @returns {object} metadata of component
       */
      this.getValue = () => {
        return this.ccm.helper.clone(loadedComponent.meta);
      };

      /**
       * Triggers the submit of the entered data
       * @param event
       */
      this.submit = event => {
        // prevent page reload
        if (event) event.preventDefault();

        // perform finish actions
        self.ccm.helper.onFinish(self);
      };
    }
  };

  function p(){window.ccm[v].component(component)}var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}

}
