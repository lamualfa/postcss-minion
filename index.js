const rename = require('postcss-rename');

module.export = function create(options) {
  const { classMapsFieldName, callback, ...renameOptions } = options;
  return rename({
    outputMapCallback: (classMaps) => {
      global[classMapsFieldName || 'classMaps'] = classMaps;
      if (callback) callback(classMaps);
    },
    ...renameOptions,
  });
};
