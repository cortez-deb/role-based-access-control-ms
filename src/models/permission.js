import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/connection.js";



class Permission extends Model {
  id = null;
  name = null;
  action = null;
  resource = null;
  role_id = null;
  createdAt = null;
  updatedAt = null;
}

Permission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resource: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "roles",
        key: "id",
      },
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    sequelize,
    modelName: "Permission",
    tableName: "permissions",
    timestamps: true,
    freezeTableName: true,
  }
);

export default Permission;
