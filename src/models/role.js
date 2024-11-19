import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/connection.js";


class Role extends Model {
    static associate(models) {
        Role.belongsToMany(models.User, {
            through: "User_roles",
            foreignKey: "role_id",
            otherKey: "user_id",
        });
        // Role.hasMany(
        //     models.Permission,
        //     {
        //         through: "Role_permissions",
        //         foreignKey: "role_id",
        //         otherKey: "permission_id",
        //     }
        // )
        Role.belongsToMany(models.Permission, {
            through: "Role_permissions",
            foreignKey: "role_id",
            otherKey: "permission_id",
        });
    }
}

Role.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "Role",
        tableName: "roles",
        freezeTableName: true,
        timestamps: true,
    }
);

export default Role;
