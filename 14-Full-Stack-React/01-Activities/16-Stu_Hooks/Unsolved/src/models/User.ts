import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
} from "sequelize";
import bcrypt from "bcrypt";

/*
! User Model using our own interfaces

import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
}

*/

// ! User Model using sequelize's built-in types
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;

  async savePassword(pwd: string): Promise<void> {
      this.password = await bcrypt.hash(pwd, 10);
  }

  async checkPassword(pwd: string): Promise<boolean> {
    return await bcrypt.compare(pwd, this.password);
  }
}

export function UserFactory(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
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
          notNull: {
            msg: "Please enter a password",
          },
          len: {
            args: [8, 20],
            msg: "Your password must be between 8 and 20 characters",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          await newUserData.savePassword(newUserData.password);
        },
        beforeUpdate: async (updatedUserData) => {
          if (updatedUserData.password) {
            await updatedUserData.savePassword(updatedUserData.password);
          }
        },
      },
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: "user",
    }
  );

  return User;
}
