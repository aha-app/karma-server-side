var expect = require('chai').expect;
var server = require('../');
require('lie/polyfill');

describe('server-side', function () {
  it('returns result', function () {
    return server.run(function () {
      return 1;
    }).then(function (result) {
      expect(result).to.equal(1);
    });
  });

  it('can pass arguments', function () {
    return server.run(1, 2, function (a, b) {
      return a + b;
    }).then(function (result) {
      expect(result).to.equal(3);
    });
  });

  it('can call several at a time with results coordinated', function () {
    function run(n) {
      return server.run(n, function (a) {
        return a;
      });
    }

    return Promise.all([
      run(1),
      run(2),
      run(3),
      run(4)
    ]).then(function (results) {
      expect(results).to.eql([1, 2, 3, 4]);
    });
  });

  it('returns result from promise', function () {
    return server.run(function () {
      return new Promise(function (fulfil) {
        fulfil(1);
      });
    }).then(function (result) {
      expect(result).to.equal(1);
    });
  });

  it('throws exception', function () {
    return server.run(function () {
      throw new Error('argh!');
    }).then(function () {
      throw new Error("expected exception to be thrown");
    }, function (error) {
      expect(error.message).to.equal('argh!');
    });
  });

  it('throws exception from promise', function () {
    return server.run(function () {
      return new Promise(function (fulfil, reject) {
        reject(new Error('argh!'));
      });
    }).then(function () {
      throw new Error("expected exception to be thrown");
    }, function (error) {
      expect(error.message).to.equal('argh!');
    });
  });

  it('can require a module, from the cwd of karma', function () {
    return server.run(function () {
      return serverRequire('./test/module');
    }).then(function (result) {
      expect(result).to.equal('this is a module');
    });
  });

  it('can require a normal module', function () {
    return server.run(function () {
      var fs = serverRequire('fs-promise');
      return fs.readFile('test/afile.txt', 'utf-8');
    }).then(function (result) {
      expect(result).to.equal('this is a file\n');
    });
  });

  it('can keep context from one run to the next', function () {
    return server.run(function () {
      this.x = 'something';
    }).then(function () {
      return server.run(function () {
        return this.x;
      }).then(function (result) {
        expect(result).to.equal('something');
      });
    });
  });
});
