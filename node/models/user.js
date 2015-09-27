"use strict";
var bcrypt = require('bcrypt-nodejs');
var user = require('../config/user');

module.exports = function (sequelize, DataTypes) {

    var config = user(DataTypes);

    return sequelize.define(config.name, config.model, {
        getterMethods: {},
        setterMethods: {},
        classMethods: {
            generateHash: function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
            associate: function (models) {
                //User.hasMany(models.Task)
            }
        },
        instanceMethods: {
            validPassword: function (password) {
                return bcrypt.compareSync(password, this.encrypted_password);
            }
        }
    });
};