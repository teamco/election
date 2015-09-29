"use strict";

module.exports = function (sequelize, DataTypes) {

    var bcrypt = require('bcrypt-nodejs'),
        candidates = require('../config/models/candidates'),
        config = candidates(DataTypes);

    return sequelize.define(config.name, config.model, {
        getterMethods: {},
        setterMethods: {}
    });
};