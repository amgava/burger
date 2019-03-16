var orm = require("../config/orm.js");

var burger = {

  selectAll: function () {
    orm.selectAll("burgers", function (result) {
      callback(result);
    });
  },

  insertOne: function () {
    orm.insertOne("burgers", column, val, function (result) {
      callback(result);
    });
  },

  updateOne: function (objColVal, condition, callback) {
    orm.updateOne("burgers", objColVal, condition, function (result) {
      callback(result);
    });
  },
};


module.exports = burger;