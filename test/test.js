var express = require('express');
var request = require('supertest');
var antiscan = require('..');

describe('antiscan()', function () {

    var app = express();

    app.use(antiscan({
        timeout : 500,
        endpoints : [
            '/foo'
        ]
    }));

    app.get('/', function(req,res) {
        res.send(200,'OK');
    });

    app.use(function(req,res,next) {
        res.send(500);
    });

    var agent = request.agent(app);

    it('should respond with 200 /', function (done) {
        agent.get('/').expect(200, done);
    });

    it('should respond with 404 on /xmlrpc.php', function(done) {
        agent.get('/xmlrpc.php').expect(404, done);
    });

    it('should respond with 404 on /foo', function(done) {
        agent.get('/foo').expect(404, done);
    });

    it('should respond with 404 on /bar/fckeditor/hasi', function(done) {
        agent.get('/bar/fckeditor/hasi').expect(404, done);
    });

    it('should respond with 404 on /bar/fckeditor/foo', function(done) {
        agent.get('/bar/fckeditor/hasi').expect(404, done);
    });
});
