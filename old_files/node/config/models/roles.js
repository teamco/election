"use strict";

module.exports = function (DataTypes) {
    return {
        table: 'Roles',
        name: 'Role',
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