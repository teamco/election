"use strict";

module.exports = function (DataTypes) {
    return {
        table: 'Templates',
        name: 'Template',
        model: {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
                allowNull: false
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }
    }
};