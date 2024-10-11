import { Model, DataTypes } from "sequelize";
import sequelize from "./index.js";

class RolePermissions extends Model {
  id = null;
  role_id = null;
  permission_id = null;
  createdAt = null;
  updatedAt = null;
}

RolePermissions.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    role_id: {
      type: DataTypes.UUID,
      references: {
        model: "Role",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    permission_id: {
      type: DataTypes.UUID,
      references: {
        model: "Permission",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "RolePermissions",
    tableName: "role_permissions",
    freezeTableName: true,
    timestamps: true,
  }
);

export default RolePermissions;
   