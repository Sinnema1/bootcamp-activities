import { DataTypes, Model } from 'sequelize';
export class User extends Model {
}
export function UserFactory(sequelize) {
    // TODO: Add validations to the User model
    User.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 8
            }
        }
    }, {
        tableName: 'users',
        sequelize,
    });
    return User;
}
