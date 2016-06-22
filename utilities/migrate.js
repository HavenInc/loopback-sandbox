var app = require('../server/server');
var dataSource = app.dataSources.mymysql;

dataSource.autoupdate('AccessToken', function(err) {

  if (!err) {
    console.log('AccessToken table created');
  } else {
    console.log('-- AccessToken table not created');
  }

});

dataSource.autoupdate('ACL', function(err) {
  if (!err) {
    console.log('ACL table created');
  } else {
    console.log('-- ACL table not created');
  }
});

dataSource.autoupdate('RoleMapping', function(err) {
  if (!err) {
    console.log('RoleMapping table created');
  } else {
    console.log('-- RoleMapping table not created');
  }
});

dataSource.autoupdate('Role', function(err) {
  if (!err) {
    console.log('Role table created');
  } else {
    console.log('-- Role table not created');
  }
});

dataSource.autoupdate('User', function(err) {
  if (!err) {
    console.log('User table created');
  } else {
    console.log('-- User table not created');
  }
});

dataSource.autoupdate('Todo', function(err) {
  if (!err) {
    console.log('Todo table created');
  } else {
    console.log('-- Todo table not created');
  }
});

dataSource.autoupdate('tag', function(err) {
  if (!err) {
    console.log('tag table created');
  } else {
    console.log('-- tag table not created');
  }
});
