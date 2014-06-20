/*!
 * express-antiscan
 * Copyright(c) 2014 elastic.io GmbH
 *
 * MIT Licensed
 */
var debug = require('debug')('express-antiscan');

var DEFAULT_TIMEOUT = 25000; // Default timeout in milliseconds

exports = module.exports = function(options) {
    options = extend({
        timeout : DEFAULT_TIMEOUT
    }, options);
    var endpoints = require('./endpoints')();
    endpoints = endpoints.concat(options.endpoints || []);
    debug('Found %s endpoints, [%s]', endpoints.length, endpoints.join(','));

    var timeout = options.timeout;
    debug('Configured timeout %s ms', timeout);

    return function handleScan(req,res,next) {
        var path = req.path, found;
        debug(path);
        endpoints.forEach(function(endpoint) {
            if (endpoint === path) {
                found = true;
            }
        });
        if (found) {
            debug('Found an endpoint that matched anti-scan list of endpoints "%s"', path);
            setTimeout(function() {
                res.send(404, 'Not found');
            }, timeout);
        } else {
            return next();
        }
    }
};

/**
 * Shallow clone a single object.
 *
 * @param {Object} obj
 * @param {Object} source
 * @return {Object}
 * @api private
 */

function extend(obj, source) {
    if (!source) return obj;

    for (var prop in source) {
        obj[prop] = source[prop];
    }

    return obj;
}