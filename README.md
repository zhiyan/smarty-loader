## Smarty loader for [webpack](https://webpack.github.io/)

### Install

```sh
$ npm i smarty-loader
```

### Usage

```javascript
module: {
    loaders: [ {
        test: /\.tpl$|.smarty$/,
        loader: 'smarty'
    } ]
}
```

```javascript
var template = require('./template.tpl');
var html = template.fetch({ foo: 'bar' });
```

### License
MIT (http://www.opensource.org/licenses/mit-license.php)
