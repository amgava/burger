var orm = require("../config/orm.js");

var burger = {

  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },

  insertOne: function (column, val, callback) {
    orm.insertOne("burgers", column, val, function (res) {
      callback(res);
    });
  },

  updateOne: function (objColVal, condition, callback) {
    orm.updateOne("burgers", objColVal, condition, function (res) {
      callback(res);
    });
  },
};


module.exports = burger;