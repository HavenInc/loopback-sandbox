'use strict'
const loopback = require('loopback');

module.exports = function(Todo) {

  Todo.createTodo = function(name, cb) {
    let ctx = loopback.getCurrentContext();


  };

  Todo.remoteMethod('createTodo', {
    accepts: [],
    returns: { arg: 'status', type: 'string' },
    http: {
      verb: 'put'
    }
  });
};
