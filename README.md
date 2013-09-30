# assert-keys

asserts that some keys are present in an object

## install

```
npm i assert-keys
```

## example

```javascript
var checkConfig = require('assert-keys')(['port', 'api_url']);

checkConfig({port: 8000, api_url: 'http://localhost:1234'}); // doesn't throw
checkConfig({port: 8000}); // throws!
```
