var queries = require("../db/queries");

module.exports = {
  readAll: function(table) {
    return queries.readAll(table);
  },
  readSpecific: function({table, attr, val}) {
    return queries.readSingle(table, attr, val);
  }
};