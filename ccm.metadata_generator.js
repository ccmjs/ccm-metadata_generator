/**
 * @overview ccm metadata generator to create metadata of components and configs
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
     * @type {{}}
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
                <div class="col-lg-12">
                  <p class="lead">Activate fields with their checkboxes. All changes will be visible live in the "Result" panel.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8">
                  <div class="form-group">
                    <label for="inputTitle">Title</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeTitle" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputTitle">
                    </div>
                    <p class="help-block">Title of the resource.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputCreator">Creator</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeCreator" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputCreator">
                    </div>
                    <p class="help-block">An entity primarily responsible for making the resource. Multiple creators can be separated by commas(,).</p>
                  </div>
                  <div class="form-group">
                    <label for="inputSubject">Subject</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeSubject" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputSubject">
                    </div>
                    <p class="help-block">Topic of the resource.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputDescription">Description</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeDescription" class="metaFieldCheckbox">
                      </span>
                      <textarea class="form-control" rows="3" id="inputDescription"></textarea>
                    </div>
                    <p class="help-block">Description of the resource.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputPublisher">Publisher</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includePublisher" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputPublisher">
                    </div>
                    <p class="help-block">An entity responsible for making the resource available. Multiple publishers can be separated by commas(,).</p>
                  </div>
                  <div class="form-group">
                    <label for="inputContributor">Contributor</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeContributor" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputContributor">
                    </div>
                    <p class="help-block">An entity responsible for making contributions to the resource. Multiple contributors can be separated by commas(,).</p>
                  </div>
                  <div class="form-group">
                    <label for="inputDate">Date <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="large" data-balloon="If your browser provides a datepicker please use it. Otherwise stick to the format YYYY-MM-DD" data-balloon-pos="right">
                          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                        </button></label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeDate" class="metaFieldCheckbox">
                      </span>
                      <input type="date" class="form-control" id="inputDate">
                    </div>
                    <p class="help-block">The date the resource was published. Format: YYYY-MM-DD</p>
                  </div>
                  <div class="form-group">
                    <label for="inputFormat">Format <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="large" data-balloon="If the metadata is applied to a component, choose application/javascript. If it's applied to a configuration choose 	application/json." data-balloon-pos="right">
                          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                        </button></label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeFormat" class="metaFieldCheckbox">
                      </span>
                      <select class="form-control" id="inputFormat">
                        <option value="application/javascript" selected>application/javascript</option>
                        <option value="application/json">application/json</option>
                      </select>
                    </div>
                    <p class="help-block">The file format of the resource.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputIdentifier">Identifier <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="large" data-balloon="If you already have a unique identifier for the resource, use that one. Otherwise please generate one." data-balloon-pos="right">
                          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                        </button></label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeIdentifier" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputIdentifier">
                      <span class="input-group-btn">
                        <button type="button" id="buttonGenerateIdentifier" class="btn btn-default">Generate</button>
                      </span>
                    </div>
                    <p class="help-block">An unambiguous reference to the resource within a given context.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputPath">Path</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includePath" class="metaFieldCheckbox">
                      </span>
                      <input type="url" class="form-control" id="inputPath">
                    </div>
                    <p class="help-block">URL where the resource can be found.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputSource">Source</label>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeSource" class="metaFieldCheckbox">
                      </span>
                      <input type="url" class="form-control" id="inputSource">
                    </div>
                    <p class="help-block">URL to a related resource from which this resource is derived.</p>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <div class="checkbox no-margin">
                        <label>
                          <input type="checkbox" id="includeLicenses" value="includeLicenses" class="metaFieldCheckbox"> 
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
                              <input type="checkbox" id="includeSoftwareLicense" value="includeSoftwareLicense" class="metaFieldCheckbox"> 
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
                              <input type="checkbox" id="includeContentLicense" value="includeContentLicense" class="metaFieldCheckbox"> 
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
                  <div id="fixedRightBar" style="position: fixed; top: 20%; width: inherit; padding-right: 2%;">
                    <div class="panel panel-info">
                      <div class="panel-heading">
                        <h3 class="panel-title">
                          Settings
                        </h3>
                      </div>
                      <div class="panel-body">
                        <button class="btn btn-default" id="activateAllFields">Activate all fields</button>
                        <button class="btn btn-default" id="deactivateAllFields">Deactivate all fields</button>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" id="settingArray"> Interpret <code>,</code> as array separator
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-primary">
                      <div class="panel-heading">
                        <h3 class="panel-title">
                          Result
                        </h3>
                      </div>
                      <div class="panel-body">
                        <button class="btn btn-default" id="buttonCopyResultToClipboard" style="margin-bottom: 15px;">Copy result to clipboard</button>
                        <pre><samp id="resultDisplay">{}</samp></pre>
                      </div>
                    </div>
                   </div>
                </div>
              </div>
              <div class="row top-buffer">
                <blockquote>
                  <p class="small">Part of the metadata is derived from <a href="http://www.dublincore.org">dublincore.org</a></p>
                </blockquote>
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
       * Settings
       * @type {{interpretCommaAsArraySeparator: boolean}}
       */
      let settings = {
        interpretCommaAsArraySeparator: false
      };

      /**
       * Stores which part of the metadata are active
       * @type {{}}
       */
      let metadataActive = {
        "title": false,
        "creator": false,
        "subject": false,
        "description": false,
        "publisher": false,
        "contributor": false,
        "date": false,
        "format": false,
        "identifier": false,
        "path": false,
        "source": false,
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
        "title": "",
        "creator": "",
        "subject": "",
        "description": "",
        "publisher": "",
        "contributor": "",
        "date": "",
        "format": "application/javascript",
        "identifier": "",
        "path": "",
        "source": "",
        "license": {
          "software": "",
          "content": ""
        }
      };

      /**
       * Contains only the activated parts of the metadata
       * @type {{}}
       */
      let resultingMetadata = {

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

        if (window.innerWidth < 1200) {
          mainElement.querySelector('#fixedRightBar').style = '';
        } else {
          mainElement.querySelector('#fixedRightBar').style = 'position: fixed; top: 20%; width: inherit; padding-right: 2%;';
        }

        // This event listener toggles the fixed position in the right column to be active while on large screens
        // and disabled while on smaller screens. Bootstrap breakpoint: lg
        const breakpointLgHit = window.matchMedia("(min-width: 1200px)");
        breakpointLgHit.addListener(event => {
          if (event.matches) {
            mainElement.querySelector('#fixedRightBar').style = 'position: fixed; top: 20%; width: inherit; padding-right: 2%;';
          } else {
            mainElement.querySelector('#fixedRightBar').style = '';
          }
        });

        mainElement.querySelector('#activateAllFields').addEventListener('click', function() {
          mainElement.querySelectorAll('.metaFieldCheckbox').forEach(checkbox => {
            checkbox.checked = true;
            const event = document.createEvent('HTMLEvents');
            event.initEvent('change', false, true);
            checkbox.dispatchEvent(event);
          });
          generateResult();
        });

        mainElement.querySelector('#deactivateAllFields').addEventListener('click', function() {
          mainElement.querySelectorAll('.metaFieldCheckbox').forEach(checkbox => {
            checkbox.checked = false;
            const event = document.createEvent('HTMLEvents');
            event.initEvent('change', false, true);
            checkbox.dispatchEvent(event);
          });
          generateResult();
        });

        mainElement.querySelector('#settingArray').addEventListener('change', function() {
          settings.interpretCommaAsArraySeparator = this.checked;
          generateResult();
        });

        mainElement.querySelector('#buttonCopyResultToClipboard').addEventListener('click', function() {
          copyToClipboard(generateResult());
        });

        /**
         * Adds event listeners for checkbox and input of a field
         * @param key Key in lowercase
         */
        function createEventListenersForField(key) {
          mainElement.querySelector('#include' + capitalizeFirstLetter(key.toLowerCase())).addEventListener('change', function() {
            metadataActive[key] = this.checked;
            generateResult();
          });

          mainElement.querySelector('#input' + capitalizeFirstLetter(key.toLowerCase())).addEventListener('input', function() {
            metadataStore[key] = this.value;
            generateResult();
          });
        }

        createEventListenersForField('title');
        createEventListenersForField('creator');
        createEventListenersForField('subject');
        createEventListenersForField('description');
        createEventListenersForField('publisher');
        createEventListenersForField('contributor');
        createEventListenersForField('date');
        createEventListenersForField('format');
        createEventListenersForField('identifier');
        createEventListenersForField('path');
        createEventListenersForField('source');

        mainElement.querySelector('#buttonGenerateIdentifier').addEventListener('click', function() {
          const inputIdentifier = mainElement.querySelector('#inputIdentifier');
          inputIdentifier.value = uuidv4();
          const event = document.createEvent('HTMLEvents');
          event.initEvent('input', false, true);
          inputIdentifier.dispatchEvent(event);
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

        function generateWithoutInterpretation(key) {
          if (metadataActive[key]) {
            resultingMetadata[key] = metadataStore[key];
          } else {
            delete resultingMetadata[key];
          }
        }

        function generateWithInterpretation(key) {
          if (metadataActive[key]) {
            resultingMetadata[key] = interpretValue(metadataStore[key]);
          } else {
            delete resultingMetadata[key];
          }
        }

        function generateDate() {
          if (metadataActive.date) {
            if (/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(metadataStore.date)) {
              resultingMetadata.date = metadataStore.date;
            } else {
              delete resultingMetadata.date;
            }
          } else {
            delete resultingMetadata.date;
          }
        }

        function generateLicense() {
          if (metadataActive.license.self) {
            resultingMetadata.license = {};
            if (metadataActive.license.software) {
              resultingMetadata.license.software = metadataStore.license.software;
            } else {
              delete resultingMetadata.license.software;
            }
            if (metadataActive.license.content) {
              resultingMetadata.license.content = metadataStore.license.content;
            } else {
              delete resultingMetadata.license.content;
            }
          } else {
            delete resultingMetadata.license;
          }
        }

        /**
         * Generate resulting metadata
         * @returns {string} Metadata as string
         */
        function generateResult() {
          resultingMetadata = {}; // This ensures that all keys are added in order
          generateWithoutInterpretation('title');
          generateWithInterpretation('creator');
          generateWithoutInterpretation('subject');
          generateWithoutInterpretation('description');
          generateWithInterpretation('publisher');
          generateWithInterpretation('contributor');
          generateDate();
          generateWithoutInterpretation('format');
          generateWithoutInterpretation('identifier');
          generateWithoutInterpretation('path');
          generateWithoutInterpretation('source');
          generateLicense();
          const resultingMetadataString = JSON.stringify(resultingMetadata, null, 2);
          mainElement.querySelector('#resultDisplay').innerHTML = resultingMetadataString;
          return resultingMetadataString;
        }

        function interpretValue(value) {
          if (settings.interpretCommaAsArraySeparator) {
            // Only convert to an array if at least one comma is present
            if (value.includes(',')) {
              return value.split(',').map(value => value.trim());
            } else {
              return value;
            }
          } else {
            return value;
          }
        }

        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }

        // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        function uuidv4() {
          return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          );
        }

        // https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
        function copyToClipboard(str) {
          const el = document.createElement('textarea');  // Create a <textarea> element
          el.value = str;                                 // Set its value to the string that you want copied
          el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
          el.style.position = 'absolute';
          el.style.left = '-9999px';                      // Move outside the screen to make it invisible
          document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
          const selected =
            document.getSelection().rangeCount > 0        // Check if there is any content selected previously
              ? document.getSelection().getRangeAt(0)     // Store selection if found
              : false;                                    // Mark as false to know no selection existed before
          el.select();                                    // Select the <textarea> content
          document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
          document.body.removeChild(el);                  // Remove the <textarea> element
          if (selected) {                                 // If a selection existed before copying
            document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
            document.getSelection().addRange(selected);   // Restore the original selection
          }
        };

        if ( callback ) callback();
      };

      /**
       * Returns the new metadata of the resource
       * @returns {object} metadata of resource
       */
      this.getValue = () => {
        return this.ccm.helper.clone(resultingMetadata);
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
