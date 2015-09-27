"use strict";

module.exports = function (DataTypes) {
    return {
        table: 'Users',
        name: 'User',
        model: {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            encrypted_password: DataTypes.STRING,
            reset_password_token: DataTypes.STRING,
            reset_password_sent_at: DataTypes.DATE,
            remember_created_at: DataTypes.DATE,
            sign_in_count: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            current_sign_in_at: DataTypes.DATE,
            last_sign_in_at: DataTypes.DATE,
            current_sign_in_ip: DataTypes.STRING,
            last_sign_in_ip: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            provider: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
            confirmation_token: DataTypes.STRING,
            confirmed_at: DataTypes.DATE,
            confirmation_sent_at: DataTypes.DATE,
            unconfirmed_email: DataTypes.STRING,
            failed_attempts: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            unlock_token: DataTypes.STRING,
            locked_at: DataTypes.DATE,
            oauth_token: DataTypes.STRING,
            oauth_expires_at: DataTypes.DATE,
            name: DataTypes.STRING,
            image: DataTypes.TEXT
        }
    }
};