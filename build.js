const fs = require('fs');
const minify = require('babel-minify');
const pjson = require('./package.json');

const versionArray = pjson.version.split('.');

fs.readFile('ccm.metadata_generator.js', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const result = data
    .replace(/css\/default.css/g, 'https://ccmjs.github.io/ccm-metadata_generator/css/default.css')
    .replace(/css\/bootstrap.min.css/g, 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')
    .replace(/js\/ccm-16.3.0.js/g, 'https://ccmjs.github.io/ccm/versions/ccm-16.3.0.min.js')
    .replace(/name: 'metadata_generator',/g, 'name: \'metadata_generator\',version: [' + versionArray[0] + ',' + versionArray[1] + ',' + versionArray[2] + '],');

  const {code, map} = minify(result);

  fs.writeFile('dist/ccm.metadata_generator-' + pjson.version + '.min.js', code, 'utf8', function (err) {
    if (err) return console.log(err);
  });

});
