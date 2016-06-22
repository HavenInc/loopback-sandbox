'use strict'
const loopback = require('loopback');

module.exports = function(Todo) {

  Todo.createTodo = function(cb) {
    let ctx = loopback.getCurrentContext();
    let Tag = Todo.app.models.Tag;

    console.log('ctx value outside promise:', ctx, '\n');

    Tag.find()
    .then(() => {
      ctx = loopback.getCurrentContext();
      console.log('ctx value inside promise:', ctx, '\n');
      cb(null, 'ok')
    })
  };

  Todo.remoteMethod('createTodo', {
    accepts: [],
    returns: { arg: 'status', type: 'string' },
    http: {
      verb: 'put'
    }
  });
};
