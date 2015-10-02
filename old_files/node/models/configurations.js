"use strict";

module.exports = function (sequelize, DataTypes) {

    var bcrypt = require('bcrypt-nodejs'),
        configurations = require('../config/models/configurations'),
        config = configurations(DataTypes);

    return sequelize.define(config.name, config.model, {
        getterMethods: {},
        setterMethods: {}
    });
};