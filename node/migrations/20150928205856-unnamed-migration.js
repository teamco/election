"use strict";

var user = require('../config/models/user'),
    candidate = require('../config/models/candidates');

module.exports = {
    up: function (migration, DataTypes, done) {
        var config = user(DataTypes);
        migration.createTable(
            config.table,
            config.model
        ).done(done);

        var configCandidate = candidate(DataTypes);
                migration.createTable(
                    configCandidate.table,
                    configCandidate.model
                ).done(done);
    },
    down: function (migration, DataTypes, done) {
        migration.dropTable(
            user(DataTypes).table
        ).done(done);

        migration.dropTable(
            candidate(DataTypes).table
        ).done(done);
    }
};

/*var candidates = require('../config/models/candidates');

module.exports = {
    up: function (migration, DataTypes, done) {
        var config = candidate(DataTypes);
        migration.createTable(
            config.table,
            config.model
        ).done(done);
    },
    down: function (migration, DataTypes, done) {
        migration.dropTable(
            candidate(DataTypes).table
        ).done(done);
    }
};*/

/*var parties = require('../config/models/parties');

module.exports = {
    up: function (migration, DataTypes, done) {
        var config = parties(DataTypes);
        migration.createTable(
            config.table,
            config.model
        ).done(done);
    },
    down: function (migration, DataTypes, done) {
        migration.dropTable(
            parties(DataTypes).table
        ).done(done);
    }
};*/

/*var roles = require('../config/models/roles');

module.exports = {
    up: function (migration, DataTypes, done) {
        var config = roles(DataTypes);
        migration.createTable(
            config.table,
            config.model
        ).done(done);
    },
    down: function (migration, DataTypes, done) {
        migration.dropTable(
            roles(DataTypes).table
        ).done(done);
    }
};*/

/*var services = require('../config/models/services');

module.exports = {
    up: function (migration, DataTypes, done) {
        var config = services(DataTypes);
        migration.createTable(
            config.table,
            config.model
        ).done(done);
    },
    down: function (migration, DataTypes, done) {
        migration.dropTable(
            services(DataTypes).table
        ).done(done);
    }
};*/

/*    var sites = require('../config/models/sites');

    module.exports = {
        up: function (migration, DataTypes, done) {
            var config = sites(DataTypes);
            migration.createTable(
                config.table,
                config.model
            ).done(done);
        },
        down: function (migration, DataTypes, done) {
            migration.dropTable(
                sites(DataTypes).table
            ).done(done);
        }
    };*/

/*
    var templates = require('../config/models/templates');

    module.exports = {
        up: function (migration, DataTypes, done) {
            var config = templates(DataTypes);
            migration.createTable(
                config.table,
                config.model
            ).done(done);
        },
        down: function (migration, DataTypes, done) {
            migration.dropTable(
                templates(DataTypes).table
            ).done(done);
        }
    };*/
