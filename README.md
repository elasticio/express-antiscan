# response-time

[![NPM version](https://badge.fury.io/js/express-antiscan.svg)](http://badge.fury.io/js/express-antiscan)
[![Build Status](https://travis-ci.org/elasticio/express-antiscan.svg?branch=master)](https://travis-ci.org/elasticio/express-antiscan)

Middleware that handles typical URIs related to web-site security exploits, e.g. Wordpress XMLRPC, it respond with HTTP 
404 after configurable timeout to make the security exploit scanning more expensive for people who are doing it

## Installation

```sh
$ npm install express-antiscan --save
```

## API

```js
var antiscan = require('express-antiscan');

// Add this as a last rule in express
app.use(antiscan());
```

### antiscan(options)



## License

The MIT License (MIT)

Copyright (c) 2014 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.