[![NPM Version](https://badgen.net/npm/v/postcss-minion?color=red&icon=npm&label=version)](https://npmjs.com/package/postcss-minion)
[![Github License](https://badgen.net/github/license/lamualfa/postcss-minion?color=purple&label=license)](https://github.com/lamualfa/postcss-minion/blob/master/LICENSE)

# postcss-minion

Use PostCSS as a [Minion Extractor](https://github.com/lamualfa/minion#extractor).

# Usage

**postcss.config.js**

```js
module.exports = {
  plugins: [
    require('postcss-minion')(options)
  ],
};
```

# Options

### `classMapsFieldName : string`

Field name that will be used to store the Class Maps in the `global` object. Default `classMaps`.

### `callback : (classMaps) => void`

a function that will be called when classMaps is finished to generated.

### and other options from `postcss-rename` plugin

See [PostCSS Plugin Rename Options](https://github.com/google/postcss-rename#options) for more informations.