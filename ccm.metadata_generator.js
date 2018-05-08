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
                <div class="col-lg-8">
                  <div class="form-group">
                    <label for="creatorInput">Creator</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeCreator">
                      </span>
                      <input type="text" class="form-control" id="creatorInput">
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <div class="checkbox no-margin">
                        <label>
                          <input type="checkbox" id="includeLicenses" value="includeLicenses"> 
                          <h3 class="panel-title">
                          License
                          </h3>
                        </label>
                        <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="medium" data-balloon="Licenses are split between software and content." data-balloon-pos="right">
                          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                        </button>
                      </div>
                    </div>
                    <div class="panel-body">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <div class="checkbox no-margin">
                            <label>
                              <input type="checkbox" id="includeSoftwareLicense" value="includeSoftwareLicense"> 
                              <h3 class="panel-title">
                                Software
                              </h3>
                            </label>
                          </div>
                        </div>
                        <div class="panel-body">
                          <label class="control-label">Choose a software license</label>
                          <form class="form-inline" role="form">
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="software_license_choose" id="software_license_choose_1" value="﻿AGPL"> ﻿GNU Affero General Public License (﻿AGPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_2" value="﻿GPL"> ﻿GNU General Public License (﻿GPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_3" value="﻿LGPL"> ﻿GNU Lesser General Public License (﻿LGPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_4" value="﻿MPL"> ﻿﻿Mozilla Public License (MPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_5" value="﻿Apache"> ﻿﻿Apache License (Apache) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_6" value="﻿MIT"> ﻿﻿MIT License (MIT) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_7" value="﻿Unlicense"> ﻿The Unlicense (﻿Unlicense) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" id="software_license_choose_8" name="software_license_choose" value="other">
                                  Other: 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <input placeholder="Other license" type="text" class="form-control" id="other_software_license" data-rule-required="true">
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <div class="checkbox no-margin">
                            <label>
                              <input type="checkbox" id="includeContentLicense" value="includeContentLicense"> 
                              <h3 class="panel-title">
                                Content
                              </h3>
                            </label>
                          </div>
                        </div>
                        <div class="panel-body">
                          Content
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="panel panel-primary">
                    <div class="panel-heading">
                      <h3 class="panel-title">
                        Result
                      </h3>
                    </div>
                    <div class="panel-body">
                      <pre><samp id="resultDisplay">{}</samp></pre>
                    </div>
                  </div>
                </div>
              </div>
              `
            }
          ]
        }
      },
      css: [ 'ccm.load', 'css/bootstrap.min.css', 'css/balloon.min.css', 'css/default.css' ],
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
       * Stores which part of the metadata are active
       * @type {{}}
       */
      let metadataActive = {
        "creator": false,
        "license": {
          "self": false,
          "software": false,
          "content": false
        }
      };

      /**
       * Stores the metadata from currently selected options, even the disabled ones
       * @type {{}}
       */
      let metadataStore = {
        "creator": "",
        "license": {
          "software": '',
          "content": ''
        }
      };

      /**
       * Contains only the activated parts of the metadata
       * @type {{}}
       */
      let displayedResultMetadata = {

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

        mainElement.querySelector('#includeCreator').addEventListener('change', function() {
          metadataActive.creator = this.checked;
          generateResult();
        });

        mainElement.querySelector('#creatorInput').addEventListener('input', function() {
          metadataStore.creator = this.value;
          generateResult();
        });

        mainElement.querySelector('#includeLicenses').addEventListener('change', function() {
          metadataActive.license.self = this.checked;
          generateResult();
        });

        mainElement.querySelector('#includeSoftwareLicense').addEventListener('change', function() {
          metadataActive.license.software = this.checked;
          generateResult();
        });

        mainElement.querySelector('#includeContentLicense').addEventListener('change', function() {
          metadataActive.license.content = this.checked;
          generateResult();
        });

        Array.from(mainElement.querySelectorAll('input[name=software_license_choose]')).forEach(radio => {
          radio.addEventListener('change', function () {
            metadataStore.license.software = this.value;
            switch (this.value) {
              case '﻿AGPL':
                metadataStore.license.software = '﻿AGPL-3.0-only';
                break;
              case '﻿GPL':
                metadataStore.license.software = '﻿GPL-3.0-only';
                break;
              case '﻿LGPL':
                metadataStore.license.software = '﻿LGPL-3.0-only';
                break;
              case '﻿MPL':
                metadataStore.license.software = '﻿MPL-2.0';
                break;
              case '﻿Apache':
                metadataStore.license.software = '﻿Apache-2.0';
                break;
              case '﻿MIT':
                metadataStore.license.software = '﻿MIT';
                break;
              case '﻿Unlicense':
                metadataStore.license.software = '﻿Unlicense';
                break;
              case 'other':
                metadataStore.license.software = mainElement.querySelector('#other_software_license').value;
                break;
              default:
                metadataStore.license.software = '';
                break;
            }
            generateResult();
          });
        });

        mainElement.querySelector('#other_software_license').addEventListener('input', function() {
          if (mainElement.querySelector('#software_license_choose_8').checked) {
            metadataStore.license.software = this.value;
            generateResult();
          }
        });

        function generateLicense() {
          if (metadataActive.license.self) {
            displayedResultMetadata.license = {};
            if (metadataActive.license.software) {
              displayedResultMetadata.license.software = metadataStore.license.software;
            } else {
              delete displayedResultMetadata.license.software;
            }
            if (metadataActive.license.content) {
              displayedResultMetadata.license.content = metadataStore.license.content;
            } else {
              delete displayedResultMetadata.license.content;
            }
          } else {
            delete displayedResultMetadata.license;
          }
        }

        function generateCreator() {
          if (metadataActive.creator) {
            displayedResultMetadata.creator = metadataStore.creator;
          } else {
            delete displayedResultMetadata.creator;
          }
        }

        /**
         * Generate resulting metadata
         */
        function generateResult() {
          generateCreator();
          generateLicense();
          mainElement.querySelector('#resultDisplay').innerHTML = JSON.stringify(displayedResultMetadata, null, 2);
        }

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
        function setMetadata(path, value) {
          let schema = metadataStore;
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
