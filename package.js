Package.describe({
  name: 'jonlachlan:ottypes-rich-text',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript');
  api.addFiles([
    'lib/diff.js',
    'lib/is.js',
    'lib/op.js',
    'lib/type.js',
  ]);
  api.addFiles('lib/delta.js');
  api.export('diff');
  api.export('Delta');
});
