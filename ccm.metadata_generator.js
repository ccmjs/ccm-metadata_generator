/**
 * @overview ccm metadata generator to create metadata for components and configurations
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
          "class": "container bootfont",
          "inner": [
            {
              "inner": `
              <div class="row">
                <div class="col-lg-8">
                  <h1>Metadata Generator</h1>
                  <p><em>ccm</em> Metadata Version <span class="label label-primary">ccm-meta 1.0.0</span></p>
                  <p class="lead">Activate fields with their checkboxes. All changes will be visible live in the "Result" panel.</p>
                  <div class="form-group">
                    <label for="inputTitle">Title</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: Hello World</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeTitle" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputTitle">
                    </div>
                    <p class="help-block">Title of the resource.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputVersion">Version</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: 1.0.0</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeVersion" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputVersion">
                    </div>
                    <p class="help-block">Version number of the resource. Please use <a href="https://semver.org/" target="_blank">Semantic Versioning</a></p>
                  </div>
                  <div class="form-group">
                    <label for="inputCreator">Creator</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: John Doe</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeCreator" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputCreator">
                    </div>
                    <p class="help-block">An entity primarily responsible for making the resource. Multiple creators can be separated by commas(,).</p>
                  </div>
                  <div class="form-group">
                    <label for="inputSubject">Subject</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: Programming</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeSubject" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputSubject">
                    </div>
                    <p class="help-block">Topic of the resource.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputDescription">Description</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: This resource is about...</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeDescription" class="metaFieldCheckbox">
                      </span>
                      <textarea class="form-control" rows="3" id="inputDescription"></textarea>
                    </div>
                    <p class="help-block">Description of the resource.</p>
                  </div>
                  <div class="form-group">
                    <label for="inputPublisher">Publisher</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: John Doe</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includePublisher" class="metaFieldCheckbox">
                      </span>
                      <input type="text" class="form-control" id="inputPublisher">
                    </div>
                    <p class="help-block">An entity responsible for making the resource available. Multiple publishers can be separated by commas(,).</p>
                  </div>
                  <div class="form-group">
                    <label for="inputContributor">Contributor</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: John Doe</span>
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
                          <span class="info-icon">&#8505;</span>
                        </button></label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: ${new Date().toISOString().split('T')[0]}</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includeDate" class="metaFieldCheckbox">
                      </span>
                      <input type="date" class="form-control" id="inputDate" value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <p class="help-block">The date the resource was published. Format: YYYY-MM-DD</p>
                  </div>
                  <div class="form-group">
                    <label for="inputFormat">Format <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="large" data-balloon="If the metadata is applied to a component, choose application/javascript. If it's applied to a configuration choose 	application/json." data-balloon-pos="right">
                          <span class="info-icon">&#8505;</span>
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
                          <span class="info-icon">&#8505;</span>
                        </button></label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: da3581d3-7a46-4b87-882c-935c371c3078</span>
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
                    <label for="inputPath">Path</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: https://example.com/ccm.hello_world.js</span>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input type="checkbox" id="includePath" class="metaFieldCheckbox">
                      </span>
                      <input type="url" class="form-control" id="inputPath">
                    </div>
                    <p class="help-block">URL where the resource can be found.</p>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <div class="form-group">
                        <label for="inputData">Data <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="large" data-balloon="If the metadata is applied to a component, you could specify a URL to a configuration file here. Likewise if the metadata is applied to a configuration a URL to the component could be specified." data-balloon-pos="right">
                              <span class="info-icon">&#8505;</span>
                            </button></label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: https://example.com/configs.js</span>
                        <div class="input-group">
                          <span class="input-group-addon">
                            <input type="checkbox" id="includeData" class="metaFieldCheckbox">
                          </span>
                          <input type="url" class="form-control" id="inputData">
                        </div>
                        <p class="help-block">URL to additional data for the resource.</p>
                      </div>
                      <div class="form-group">
                        <label for="inputData-key">Data-Key</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: demo</span>
                        <div class="input-group">
                          <span class="input-group-addon">
                            <input type="checkbox" id="includeData-key" class="metaFieldCheckbox">
                          </span>
                          <input class="form-control" id="inputData-key">
                        </div>
                        <p class="help-block">A key that defines where the data is found inside the resource that is mentioned in the data field.</p>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputSource">Source</label> <span class="example-text" data-balloon-length="fit" data-balloon="Click to copy to clipboard." data-balloon-pos="up">Example: https://example.com/ccm.source.js</span>
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
                          <input type="checkbox" id="includeLanguage" value="includeLanguage" class="metaFieldCheckbox"> 
                          <h3 class="panel-title">
                          Language
                          </h3>
                        </label>
                        <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="medium" data-balloon="Select all languages that the resource supports." data-balloon-pos="right">
                          <span class="info-icon">&#8505;</span>
                        </button>
                      </div>
                    </div>
                    <div class="panel-body">
                      <select id="inputLanguage" multiple></select>
                    </div>
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
                          <span class="info-icon">&#8505;</span>
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
                            <div class="form-group" style="display: block">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_6" value="MIT"> ﻿﻿MIT License (MIT) <span class="label label-success">Recommended</span>
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="software_license_choose" id="software_license_choose_1" value="AGPL"> ﻿GNU Affero General Public License (﻿AGPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_2" value="GPL"> ﻿GNU General Public License (﻿GPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_3" value="LGPL"> ﻿GNU Lesser General Public License (﻿LGPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_4" value="MPL"> ﻿﻿Mozilla Public License (MPL) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_5" value="Apache"> ﻿﻿Apache License (Apache) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_7" value="Unlicense"> ﻿The Unlicense (﻿Unlicense) 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="software_license_choose" id="software_license_choose_8" value="other">
                                  Other: 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <input placeholder="Other license" type="text" class="form-control" id="other_software_license">
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
                          <label class="control-label">Choose a content license</label>
                          <form class="form-inline" role="form">
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="content_license_choose" id="content_license_choose_1" value="﻿CC-BY-4.0"> ﻿﻿Creative Commons Attribution 4.0 International (CC-BY-4.0) <span class="label label-success">Recommended</span>
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="content_license_choose" id="content_license_choose_2" value="﻿﻿CC-BY-SA-4.0"> ﻿﻿﻿Creative Commons Attribution Share Alike 4.0 International (﻿CC-BY-SA-4.0)
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="content_license_choose" id="content_license_choose_3" value="﻿﻿﻿CC-BY-ND-4.0"> ﻿﻿﻿﻿Creative Commons Attribution No Derivatives 4.0 International (﻿CC-BY-ND-4.0)
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="content_license_choose" id="content_license_choose_4" value="﻿﻿﻿﻿CC-BY-NC-4.0"> ﻿Creative Commons Attribution Non Commercial 4.0 International (﻿CC-BY-NC-4.0)
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="content_license_choose" id="content_license_choose_5" value="﻿﻿﻿﻿﻿CC-BY-NC-SA-4.0"> ﻿Creative Commons Attribution Non Commercial Share Alike 4.0 International (﻿CC-BY-NC-SA-4.0)
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                 <input type="radio" name="content_license_choose" id="content_license_choose_6" value="﻿﻿﻿﻿﻿﻿CC-BY-NC-ND-4.0"> ﻿Creative Commons Attribution Non Commercial No Derivatives 4.0 International﻿ (﻿CC-BY-NC-ND-4.0)
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="radio">
                                <label class="radio-inline control-label">
                                  <input type="radio" name="content_license_choose" id="content_license_choose_7" value="other">
                                  Other: 
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <input placeholder="Other license" type="text" class="form-control" id="other_content_license">
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <div class="checkbox no-margin">
                        <label>
                          <input type="checkbox" id="includeTags" value="includeTags" class="metaFieldCheckbox"> 
                          <h3 class="panel-title">
                          Tags
                          </h3>
                        </label>
                        <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="medium" data-balloon="Add tags that describe the resource." data-balloon-pos="right">
                          <span class="info-icon">&#8505;</span>
                        </button>
                      </div>
                    </div>
                    <div class="panel-body">
                      <select id="inputTags" multiple></select>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <div class="checkbox no-margin">
                        <label>
                          <input type="checkbox" id="includeCategory" value="includeCategory" class="metaFieldCheckbox"> 
                          <h3 class="panel-title">
                          Category
                          </h3>
                        </label>
                        <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="medium" data-balloon="Specify a category that best suits the resource." data-balloon-pos="right">
                          <span class="info-icon">&#8505;</span>
                        </button>
                      </div>
                    </div>
                    <div class="panel-body">
                      <select id="inputCategory"></select>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <div class="checkbox no-margin">
                        <label>
                          <input type="checkbox" id="includeBloomTaxonomy" value="includeBloomTaxonomy" class="metaFieldCheckbox"> 
                          <h3 class="panel-title">
                          Bloom’s Taxonomy
                          </h3>
                        </label>
                      </div>
                    </div>
                    <div class="panel-body">
                      <select id="inputBloomTaxonomy" multiple></select>
                      <p class="help-block no-margin">
                        The revised form of Bloom’s Taxonomy is used. You can find out more about it <a href="https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/" target="_blank">here</a>, <a href="https://tips.uark.edu/using-blooms-taxonomy/" target="_blank">here</a> and <a href="http://sciencesite.16mb.com/Bloom's%20Taxonomy%20Original%20and%20Revised%20by%20Mary%20Forehand.pdf" target="_blank">here</a>.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div id="fixedRightBar" style="position: fixed; top: 5%; width: inherit; padding-right: 2%;">
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
                            <button type="button" class="btn btn-default btn-circle tooltip-toggle" data-balloon-length="medium" data-balloon="This also applies to multiselects like language." data-balloon-pos="right">
                              <span class="info-icon">&#8505;</span>
                            </button>
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
                        <pre style="max-height: 250px;"><samp id="resultDisplay">{}</samp></pre>
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
      css: [ 'ccm.load', [ 'css/bootstrap.min.css', 'css/balloon.min.css', 'css/selectize.default.min.css', 'css/default.css' ] ],
      //display_final_metadata: true, // If set to false, nothing will be displayed after generating the new metadata
      js: [ 'ccm.load', [ 'js/jquery.min.js', 'js/bootstrap.min.js', 'js/selectize.min.js' ] ],
      no_bootstrap_container: false, // Set to true if embedded on a site that already has a bootstrap container div
      tags: ['HTML', 'JavaScript', 'CSS', 'Education'], // Tags the user can choose from
      categories: ['Art', 'Computer Science', 'Economy', 'History'], // Categories the user can choose from
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
        "version": false,
        "creator": false,
        "subject": false,
        "description": false,
        "publisher": false,
        "contributor": false,
        "date": false,
        "format": false,
        "identifier": false,
        "path": false,
        "data": false,
        "data-key": false,
        "source": false,
        "language": false,
        "license": {
          "self": false,
          "software": false,
          "content": false
        },
        "tags": false,
        "category": false,
        "bloomTaxonomy": false
      };

      /**
       * Stores the metadata from currently selected options, even the disabled ones
       * @type {{}}
       */
      let metadataStore = {
        "metaFormat": "ccm-meta",
        "metaVersion": "1.0.0",
        "title": "",
        "version": "",
        "creator": "",
        "subject": "",
        "description": "",
        "publisher": "",
        "contributor": "",
        "date": new Date().toISOString().split('T')[0],
        "format": "application/javascript",
        "identifier": "",
        "path": "",
        "data": "",
        "data-key": "",
        "source": "",
        "language": "",
        "license": {
          "software": "",
          "content": ""
        },
        "tags": "",
        "category": "",
        "bloomTaxonomy": ""
      };

      /**
       * Contains only the activated parts of the metadata
       * @type {{}}
       */
      let resultingMetadata = {};

      const languages = {
        "ab": "Abkhazian",
        "aa": "Afar",
        "af": "Afrikaans",
        "ak": "Akan",
        "sq": "Albanian",
        "am": "Amharic",
        "ar": "Arabic",
        "an": "Aragonese",
        "hy": "Armenian",
        "as": "Assamese",
        "av": "Avaric",
        "ae": "Avestan",
        "ay": "Aymara",
        "az": "Azerbaijani",
        "bm": "Bambara",
        "ba": "Bashkir",
        "eu": "Basque",
        "be": "Belarusian",
        "bn": "Bengali (Bangla)",
        "bh": "Bihari",
        "bi": "Bislama",
        "bs": "Bosnian",
        "br": "Breton",
        "bg": "Bulgarian",
        "my": "Burmese",
        "ca": "Catalan",
        "ch": "Chamorro",
        "ce": "Chechen",
        "ny": "Chichewa, Chewa, Nyanja",
        "zh": "Chinese",
        "cv": "Chuvash",
        "kw": "Cornish",
        "co": "Corsican",
        "cr": "Cree",
        "hr": "Croatian",
        "cs": "Czech",
        "da": "Danish",
        "dv": "Divehi, Dhivehi, Maldivian",
        "nl": "Dutch",
        "dz": "Dzongkha",
        "en": "English",
        "eo": "Esperanto",
        "et": "Estonian",
        "ee": "Ewe",
        "fo": "Faroese",
        "fj": "Fijian",
        "fi": "Finnish",
        "fr": "French",
        "ff": "Fula, Fulah, Pulaar, Pular",
        "gl": "Galician",
        "gd": "Gaelic (Scottish)",
        "gv": "Gaelic (Manx)",
        "ka": "Georgian",
        "de": "German",
        "el": "Greek",
        "kl": "Greenlandic",
        "gn": "Guarani",
        "gu": "Gujarati",
        "ht": "Haitian Creole",
        "ha": "Hausa",
        "he": "Hebrew",
        "hz": "Herero",
        "hi": "Hindi",
        "ho": "Hiri Motu",
        "hu": "Hungarian",
        "is": "Icelandic",
        "io": "Ido",
        "ig": "Igbo",
        "id": "Indonesian",
        "ia": "Interlingua",
        "ie": "Interlingue",
        "iu": "Inuktitut",
        "ik": "Inupiak",
        "ga": "Irish",
        "it": "Italian",
        "ja": "Japanese",
        "jv": "Javanese",
        "kn": "Kannada",
        "kr": "Kanuri",
        "ks": "Kashmiri",
        "kk": "Kazakh",
        "km": "Khmer",
        "ki": "Kikuyu",
        "rw": "Kinyarwanda (Rwanda)",
        "rn": "Kirundi",
        "ky": "Kyrgyz",
        "kv": "Komi",
        "kg": "Kongo",
        "ko": "Korean",
        "ku": "Kurdish",
        "kj": "Kwanyama",
        "lo": "Lao",
        "la": "Latin",
        "lv": "Latvian (Lettish)",
        "li": "Limburgish (Limburger)",
        "ln": "Lingala",
        "lt": "Lithuanian",
        "lu": "Luga-Katanga",
        "lg": "Luganda, Ganda",
        "lb": "Luxembourgish",
        "mk": "Macedonian",
        "mg": "Malagasy",
        "ms": "Malay",
        "ml": "Malayalam",
        "mt": "Maltese",
        "mi": "Maori",
        "mr": "Marathi",
        "mh": "Marshallese",
        "mo": "Moldavian",
        "mn": "Mongolian",
        "na": "Nauru",
        "nv": "Navajo",
        "ng": "Ndonga",
        "nd": "Northern Ndebele",
        "ne": "Nepali",
        "no": "Norwegian",
        "nb": "Norwegian bokmål",
        "nn": "Norwegian nynorsk",
        "ii": "Nuosu",
        "oc": "Occitan",
        "oj": "Ojibwe",
        "cu": "Old Church Slavonic, Old Bulgarian",
        "or": "Oriya",
        "om": "Oromo (Afaan Oromo)",
        "os": "Ossetian",
        "pi": "Pāli",
        "ps": "Pashto, Pushto",
        "fa": "Persian (Farsi)",
        "pl": "Polish",
        "pt": "Portuguese",
        "pa": "Punjabi (Eastern)",
        "qu": "Quechua",
        "rm": "Romansh",
        "ro": "Romanian",
        "ru": "Russian",
        "se": "Sami",
        "sm": "Samoan",
        "sg": "Sango",
        "sa": "Sanskrit",
        "sr": "Serbian",
        "sh": "Serbo-Croatian",
        "st": "Sesotho",
        "tn": "Setswana",
        "sn": "Shona",
        "sd": "Sindhi",
        "si": "Sinhalese",
        "ss": "Siswati",
        "sk": "Slovak",
        "sl": "Slovenian",
        "so": "Somali",
        "nr": "Southern Ndebele",
        "es": "Spanish",
        "su": "Sundanese",
        "sw": "Swahili (Kiswahili)",
        "sv": "Swedish",
        "tl": "Tagalog",
        "ty": "Tahitian",
        "tg": "Tajik",
        "ta": "Tamil",
        "tt": "Tatar",
        "te": "Telugu",
        "th": "Thai",
        "bo": "Tibetan",
        "ti": "Tigrinya",
        "to": "Tonga",
        "ts": "Tsonga",
        "tr": "Turkish",
        "tk": "Turkmen",
        "tw": "Twi",
        "ug": "Uyghur",
        "uk": "Ukrainian",
        "ur": "Urdu",
        "uz": "Uzbek",
        "ve": "Venda",
        "vi": "Vietnamese",
        "vo": "Volapük",
        "wa": "Wallon",
        "cy": "Welsh",
        "wo": "Wolof",
        "fy": "Western Frisian",
        "xh": "Xhosa",
        "yi": "Yiddish",
        "yo": "Yoruba",
        "za": "Zhuang, Chuang",
        "zu": "Zulu"
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

        /**
         * Make example text selectable with one click
         */
        mainElement.querySelectorAll('.example-text').forEach(element => {
          element.addEventListener('click', function (event) {
            event.preventDefault();
            copyToClipboard(this.innerHTML.replace('Example: ', ''));
          })
        });

        /**
         * Initialize the language input
         */
        let languageOptions = [];
        Object.keys(languages).forEach(key => {
          languageOptions.push({
            value: key,
            label: languages[key]
          });
        });

        const languageSelector = $(mainElement.querySelector('#inputLanguage')).selectize({
          delimiter: ',',
          persist: false,
          create: false,
          plugins: ['remove_button'],
          maxItems: null,
          placeholder: 'Select languages...',
          valueField: 'value',
          labelField: 'label',
          searchField: 'label',
          options: languageOptions
        })[0].selectize;

        /**
         * Initialize the tag input
         */
        let tagOptions = [];
        self.tags.forEach(tag => {
          tagOptions.push({
            value: tag
          });
        });

        const tagSelector = $(mainElement.querySelector('#inputTags')).selectize({
          delimiter: ',',
          persist: false,
          create: true,
          plugins: ['remove_button'],
          maxItems: null,
          placeholder: 'Select tags or add your own...',
          valueField: 'value',
          labelField: 'value',
          searchField: 'value',
          options: tagOptions
        })[0].selectize;

        /**
         * Initialize the category input
         */
        let categoryOptions = [];
        self.categories.forEach(category => {
          categoryOptions.push({
            value: category
          });
        });

        const categorySelector = $(mainElement.querySelector('#inputCategory')).selectize({
          persist: false,
          create: false,
          maxItems: 1,
          placeholder: 'Select a category that suits the resource',
          valueField: 'value',
          labelField: 'value',
          searchField: 'value',
          options: categoryOptions
        })[0].selectize;

        /**
         * Initialize the bloom taxonomy input
         */
        let bloomTaxonomyOptions = [
          {
            value: 'Remember'
          },
          {
            value: 'Understand'
          },
          {
            value: 'Apply'
          },
          {
            value: 'Analyze'
          },
          {
            value: 'Evaluate'
          },
          {
            value: 'Create'
          }
        ];

        const bloomTaxonomySelector = $(mainElement.querySelector('#inputBloomTaxonomy')).selectize({
          delimiter: ',',
          persist: false,
          create: false,
          plugins: ['remove_button'],
          maxItems: null,
          placeholder: 'Select all options that apply',
          valueField: 'value',
          labelField: 'value',
          searchField: 'value',
          options: bloomTaxonomyOptions
        })[0].selectize;

        generateResult();

        if (window.innerWidth < 1200) {
          mainElement.querySelector('#fixedRightBar').style = '';
        } else {
          mainElement.querySelector('#fixedRightBar').style = 'position: fixed; top: 5%; width: inherit; padding-right: 2%;';
        }

        if (window.innerHeight < 550) {
          mainElement.querySelector('#fixedRightBar').style = '';
        } else {
          mainElement.querySelector('#fixedRightBar').style = 'position: fixed; top: 5%; width: inherit; padding-right: 2%;';
        }

        // This event listener toggles the fixed position in the right column to be active while on large screens
        // and disabled while on smaller screens. Bootstrap breakpoint: lg
        const breakpointLgHit = window.matchMedia("(min-width: 1200px)");
        breakpointLgHit.addListener(event => {
          if (event.matches) {
            mainElement.querySelector('#fixedRightBar').style = 'position: fixed; top: 5%; width: inherit; padding-right: 2%;';
          } else {
            mainElement.querySelector('#fixedRightBar').style = '';
          }
        });

        // This event listener ensures that the right column is visible on smaller heights
        const breakpointHeightHit = window.matchMedia("(min-height: 550px)");
        breakpointHeightHit.addListener(event => {
          if (event.matches) {
            mainElement.querySelector('#fixedRightBar').style = 'position: fixed; top: 5%; width: inherit; padding-right: 2%;';
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
        createEventListenersForField('version');
        createEventListenersForField('creator');
        createEventListenersForField('subject');
        createEventListenersForField('description');
        createEventListenersForField('publisher');
        createEventListenersForField('contributor');
        createEventListenersForField('date');
        createEventListenersForField('format');
        createEventListenersForField('identifier');
        createEventListenersForField('path');
        createEventListenersForField('data');
        createEventListenersForField('data-key');
        createEventListenersForField('source');

        mainElement.querySelector('#buttonGenerateIdentifier').addEventListener('click', function() {
          const inputIdentifier = mainElement.querySelector('#inputIdentifier');
          inputIdentifier.value = uuidv4();
          const event = document.createEvent('HTMLEvents');
          event.initEvent('input', false, true);
          inputIdentifier.dispatchEvent(event);
          generateResult();
        });

        mainElement.querySelector('#includeLanguage').addEventListener('change', function() {
          metadataActive.language = this.checked;
          generateResult();
        });

        languageSelector.on('change', () => {
          metadataStore.language = languageSelector.getValue().join(', ');
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
            switch (this.value) {
              case 'AGPL':
                metadataStore.license.software = 'AGPL-3.0-only';
                break;
              case 'GPL':
                metadataStore.license.software = 'GPL-3.0-only';
                break;
              case 'LGPL':
                metadataStore.license.software = 'LGPL-3.0-only';
                break;
              case 'MPL':
                metadataStore.license.software = 'MPL-2.0';
                break;
              case 'Apache':
                metadataStore.license.software = 'Apache-2.0';
                break;
              case 'MIT':
                metadataStore.license.software = 'MIT';
                break;
              case 'Unlicense':
                metadataStore.license.software = 'Unlicense';
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

        Array.from(mainElement.querySelectorAll('input[name=content_license_choose]')).forEach(radio => {
          radio.addEventListener('change', function () {
            if (this.value === 'other') {
              metadataStore.license.content = mainElement.querySelector('#other_content_license').value;
            } else {
              metadataStore.license.content = this.value;
            }
            generateResult();
          });
        });

        mainElement.querySelector('#other_content_license').addEventListener('input', function() {
          if (mainElement.querySelector('#content_license_choose_7').checked) {
            metadataStore.license.content = this.value;
            generateResult();
          }
        });

        mainElement.querySelector('#includeTags').addEventListener('change', function() {
          metadataActive.tags = this.checked;
          generateResult();
        });

        tagSelector.on('change', () => {
          metadataStore.tags = tagSelector.getValue().join(', ');
          generateResult();
        });

        mainElement.querySelector('#includeCategory').addEventListener('change', function() {
          metadataActive.category = this.checked;
          generateResult();
        });

        categorySelector.on('change', () => {
          metadataStore.category = categorySelector.getValue();
          generateResult();
        });

        mainElement.querySelector('#includeBloomTaxonomy').addEventListener('change', function() {
          metadataActive.bloomTaxonomy = this.checked;
          generateResult();
        });

        bloomTaxonomySelector.on('change', () => {
          metadataStore.bloomTaxonomy = bloomTaxonomySelector.getValue().join(', ');
          generateResult();
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
          resultingMetadata.metaFormat = metadataStore.metaFormat;
          resultingMetadata.metaVersion = metadataStore.metaVersion;
          generateWithoutInterpretation('title');
          generateWithoutInterpretation('version');
          generateWithInterpretation('creator');
          generateWithoutInterpretation('subject');
          generateWithoutInterpretation('description');
          generateWithInterpretation('publisher');
          generateWithInterpretation('contributor');
          generateDate();
          generateWithoutInterpretation('format');
          generateWithoutInterpretation('identifier');
          generateWithoutInterpretation('path');
          generateWithoutInterpretation('data');
          generateWithoutInterpretation('data-key');
          generateWithoutInterpretation('source');
          generateWithInterpretation('language');
          generateLicense();
          generateWithInterpretation('tags');
          generateWithoutInterpretation('category');
          generateWithInterpretation('bloomTaxonomy');
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
        }

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
