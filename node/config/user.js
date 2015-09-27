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
                type: DataTypes.STRING(255),
                allowNull: false
            },
            encrypted_password: DataTypes.STRING(255),
            reset_password_token: DataTypes.STRING(255),
            reset_password_sent_at: DataTypes.DATE,
            remember_created_at: DataTypes.DATE,
            sign_in_count: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            current_sign_in_at: DataTypes.DATE,
            last_sign_in_at: DataTypes.DATE,
            current_sign_in_ip: DataTypes.STRING(255),
            last_sign_in_ip: DataTypes.STRING(255),
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            provider: DataTypes.STRING(255),
            role_id: DataTypes.INTEGER,
            confirmation_token: DataTypes.STRING(255),
            confirmed_at: DataTypes.DATE,
            confirmation_sent_at: DataTypes.DATE,
            unconfirmed_email: DataTypes.STRING(255),
            failed_attempts: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            unlock_token: DataTypes.STRING(255),
            locked_at: DataTypes.DATE,
            oauth_token: DataTypes.STRING(255),
            oauth_expires_at: DataTypes.DATE,
            name: DataTypes.STRING(255),
            image: DataTypes.TEXT
        }
    }
};