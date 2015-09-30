"use strict";

var user = require('../config/models/user'),
    candidate = require('../config/models/candidates'),
    parties = require('../config/models/parties'),
    roles = require('../config/models/roles'),
    services = require('../config/models/services'),
    sites = require('../config/models/sites'),
    templates = require('../config/models/templates');

module.exports = {
    up: function (migration, DataTypes, done) {
        var configUser = user(DataTypes);
        migration.createTable(
            configUser.table,
            configUser.model
        ).done(done);

        var configCandidate = candidate(DataTypes);
        migration.createTable(
            configCandidate.table,
            configCandidate.model
        ).done(done);

        var configParties = parties(DataTypes);
        migration.createTable(
            configParties.table,
            configParties.model
        ).done(done);

        var configRoles = roles(DataTypes);
           migration.createTable(
               configRoles.table,
               configRoles.model
           ).done(done);

        var configServices = services(DataTypes);
        migration.createTable(
            configServices.table,
            configServices.model
        ).done(done);

        var configSites = sites(DataTypes);
           migration.createTable(
               configSites.table,
               configSites.model
           ).done(done);

        var configTemplates = templates(DataTypes);
           migration.createTable(
               configTemplates.table,
               configTemplates.model
           ).done(done);
    },
    down: function (migration, DataTypes, done) {
        migration.dropTable(
            user(DataTypes).table
        ).done(done);

        migration.dropTable(
            candidate(DataTypes).table
        ).done(done);

        migration.dropTable(
            parties(DataTypes).table
        ).done(done);

        migration.dropTable(
           roles(DataTypes).table
       ).done(done);

        migration.dropTable(
            services(DataTypes).table
        ).done(done);

        migration.dropTable(
            sites(DataTypes).table
        ).done(done);

        migration.dropTable(
            templates(DataTypes).table
        ).done(done);
    }
};

