var connection = require("./connection.js");

// MySQL ? function to use to prevent SQL injection
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function convertObjToSQL(obj) {
  var arr = [];

  // loop through the keys and push the key/value pair as a string
  for (var key in obj) {
    var value = obj[key];

    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {

    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },

    insertOne: function (tableOutput, column, val, callback) {
        var queryString = "INSERT INTO " + tableOutput;
        queryString += "(";
        queryString += column.toString();
        queryString += ")";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ")";


        connection.query(queryString, val, function(err, result) {
                if (err) {
                    throw err;
                }

                callback(result);
            })
    },

    updateOne: function (tableOutput, objColVal, condition, callback) {
        var queryString = "UPDATE " + tableOutput;

        queryString += " SET ";
        queryString += convertObjToSQL(objColVal);
        queryString += " WHERE ";
        queryString += condition;


        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        })
    }
};

module.exports = orm;