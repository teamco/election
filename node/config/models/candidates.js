"use strict";

module.exports = function (DataTypes) {
    return {
        table: 'Candidates',
        name: 'Candidate',
        model: {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
                allowNull: false
            },     
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            image: DataTypes.TEXT,
			accountInfo: DataTypes.TEXT,
			accountTemplates: DataTypes.TEXT,
			socialAccounts: DataTypes.TEXT,
			candidateInfo: DataTypes.TEXT,
			followers: DataTypes.TEXT,
			campaigns: DataTypes.TEXT
        }
    }
};