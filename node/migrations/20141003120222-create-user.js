"use strict";

var user = require('../config/user');

module.exports = {
    up: function (migration, DataTypes, done) {
        var config = user(DataTypes);
        migration.createTable(
            config.table,
            config.model
        ).done(done);
    },
    down: function (migration, DataTypes, done) {
        migration.dropTable(
            user(DataTypes).table
        ).done(done);
    }
};