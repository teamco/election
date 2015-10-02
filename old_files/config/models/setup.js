"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require('../config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
var modelsDir = __dirname + '/../../models/';

fs.readdirSync(modelsDir).filter(
    function (file) {
        return (file.indexOf(".") !== 0);
    }
).forEach(
    function (file) {
        var model = sequelize.import(path.join(modelsDir, file));
        db[model.name] = model;
    }
);

Object.keys(db).forEach(
    function (modelName) {
        if ("associate" in db[modelName]) {
            db[modelName].associate(db);
        }
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;