import { Model, DataTypes } from "sequelize";
import sequelize from "./index.js";

class User extends Model {
    static associate(models) {
        User.belongsToMany(models.Role, {
            through: "User_roles",
            foreignKey: "user_id",
            otherKey: "role_id",
        });
    }
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        role: {
            type: DataTypes.UUID,
            references: {
                model: "roles",
                key: "id",
            },
            onDelete: "CASCADE",
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        freezeTableName: true,
        timestamps: true,
    }
);

export default User;
