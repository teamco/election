"use strict";

module.exports = function (DataTypes) {
    return {
        table: 'Services',
        name: 'Service',
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