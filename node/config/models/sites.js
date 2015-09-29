"use strict";

module.exports = function (DataTypes) {
    return {
        table: 'Sites',
        name: 'Site',
        model: {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
                allowNull: false
            }
        }
    }
};