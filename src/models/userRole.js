import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/connection.js";


class UserRoles extends Model {
  id = null;
  user_id = null;
  role_id = null;
  createdAt = null;
  updatedAt = null;
}

UserRoles.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "RBA_User",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    role_id: {
      type: DataTypes.UUID,
      references: {
        model: "roles",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "UserRoles",
    tableName: "users_role",
    freezeTableName: true,
    timestamps: true,
  }
);

export default UserRoles;
