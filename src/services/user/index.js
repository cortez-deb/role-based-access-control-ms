import User from "../../models/user.js";
import Role from "../../models/role.js";
import Permission from "../../models/permission.js";
import sequelize from "../../../config/connection.js"
import UserRoles from '../../models/userRole.js'
class UserService {
/**
 * Creates a new user in the database.
 *
 * @param {Object} data - The user data to be created.
 * @param {string} data.username - The unique username of the user.
 * @param {string} data.email - The unique email of the user.
 * @param {string} data.password - The password of the user.
 * @param {string} [data.firstName] - The first name of the user.
 * @param {string} [data.lastName] - The last name of the user.
 *
 * @returns {Promise<User|null>} - A promise that resolves to the created user, or null if an error occurs.
 *
 * @throws {Error} - If a database error occurs.
 */
async create(data) {
  try {
    const user = await User.create(data);
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
}

  /**
   * Retrieves a user from the database based on their unique identifier.
   *
   * @param {number} id - The unique identifier of the user.
   *
   * @returns {Promise<User|null>} - A promise that resolves to the user with the given ID,
   * or null if the user does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs.
   */
  async get(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * Retrieves a user from the database based on their email.
   *
   * @param {string} email - The unique email of the user.
   *
   * @returns {Promise<User|null>} - A promise that resolves to the user with the given email,
   * or null if the user does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs.
   */
  async getByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * Retrieves a user from the database based on their username.
   *
   * @param {string} username - The unique username of the user.
   *
   * @returns {Promise<User|null>} - A promise that resolves to the user with the given username,
   * or null if the user does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs.
   */
  async getByUserName(username) {
    try {
      const user = await User.findOne({ where: { username } });
      return user;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  
/**
 * Updates a user in the database based on their unique identifier.
 *
 * @param {number} id - The unique identifier of the user to be updated.
 * @param {Object} data - The updated user data.
 * @param {string} [data.username] - The unique username of the user.
 * @param {string} [data.email] - The unique email of the user.
 * @param {string} [data.password] - The password of the user.
 * @param {string} [data.firstName] - The first name of the user.
 * @param {string} [data.lastName] - The last name of the user.
 *
 * @returns {Promise<User|null>} - A promise that resolves to the updated user,
 * or null if the user does not exist or an error occurs.
 *
 * @throws {Error} - If a database error occurs.
 */
async update(id, data) {
  try {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.update(data);
    user.save()
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
}

  /**
   * Deletes a user from the database based on their unique identifier.
   *
   * @param {number} id - The unique identifier of the user to be deleted.
   *
   * @returns {Promise<boolean>} - A promise that resolves to true if the user is successfully deleted,
   * or false if the user does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs.
   */
  async delete(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      await user.destroy();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  /**
   * Assigns a role to a user in the database.
   *
   * @param {number} userId - The unique identifier of the user.
   * @param {number} roleId - The unique identifier of the role.
   *
   * @returns {Promise<User|null>} - A promise that resolves to the updated user with the assigned role,
   * or null if the user or role does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs during the transaction.
   */
  async assignRole(userId, roleId) {
    const transaction = await sequelize.transaction();
    try {
      const user = await User.findOne({where:{id:userId}}, { transaction });
      const role = await Role.findOne({where:{id:roleId}}, { transaction });
      if (!user || !role) {
        return null;
      }
      const userRole = await UserRoles.findOne({where:{user_id:userId, role_id:roleId}}, { transaction });
      if (userRole) {
        return null;
      }

     await UserRoles.create({
        user_id: userId,
        role_id: roleId
      },{
        transaction
      }
    )
      await transaction.commit();
      return user;
    } catch (e) {
      console.log(e)
      await transaction.rollback();
      return null;
    }
  }

  /**
   * Removes a role from a user in the database.
   *
   * @param {number} userId - The unique identifier of the user.
   * @param {number} roleId - The unique identifier of the role.
   *
   * @returns {Promise<User|null>} - A promise that resolves to the updated user with the removed role,
   * or null if the user or role does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs during the transaction.
   */
  async removeRole(userId, roleId) {
    const transaction = await sequelize.transaction();
    try {
      const user = await User.findByPk(userId, { transaction });
      const role = await Role.findByPk(roleId, { transaction });

      if (!user || !role) {
        await transaction.rollback();
        return null;
      }

      await user.removeRole(role, { transaction });

      await transaction.commit();
      return user;
    } catch (e) {
      await transaction.rollback();
      return null;
    }
  }
  /**
   * Assigns a permission to a user in the database.
   *
   * @param {number} userId - The unique identifier of the user.
   * @param {number} permissionId - The unique identifier of the permission.
   *
   * @returns {Promise<User|null>} - A promise that resolves to the updated user with the assigned permission,
   * or null if the user or permission does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs during the transaction.
   */
  async assignPermission(userId, permissionId) {
    const transaction = await sequelize.transaction();
    try {
      const user = await User.findByPk(userId, { transaction });
      const permission = await Permission.findByPk(permissionId, {
        transaction,
      });

      if (!user || !permission) {
        await transaction.rollback();
        return null;
      }

      await user.addPermission(permission, { transaction });

      await transaction.commit();
      return user;
    } catch (e) {
      await transaction.rollback();
      return null;
    }
  }
  /**
   * Removes a permission from a user in the database.
   *
   * @param {number} userId - The unique identifier of the user.
   * @param {number} permissionId - The unique identifier of the permission.
   *
   * @returns {Promise<User|null>} - A promise that resolves to the updated user with the removed permission,
   * or null if the user or permission does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs during the transaction.
   */
  async removePermission(userId, permissionId) {
    const transaction = await sequelize.transaction();
    try {
      const user = await User.findByPk(userId, { transaction });
      const permission = await Permission.findByPk(permissionId, {
        transaction,
      });

      if (!user || !permission) {
        await transaction.rollback();
        return null;
      }

      await user.removePermission(permission, { transaction });

      await transaction.commit();
      return user;
    } catch (e) {
      await transaction.rollback();
      return null;
    }
  }
  /**
   * Retrieves all permissions associated with a user based on their username, email, or ID.
   *
   * @param {string} username - The username of the user.
   * @param {string} email - The email of the user.
   * @param {number} id - The unique identifier of the user.
   *
   * @returns {Promise<Permission[]|null>} - A promise that resolves to an array of permissions associated with the user,
   * or null if the user does not exist or an error occurs.
   *
   * @throws {Error} - If a database error occurs.
   */
  async getAllPermissions(username, email, id) {
    try {
      const user = await User.findOne({ where: { username, email, id } });
      if (!user) return null;
      return user.getPermissions();
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  /**
   * Retrieves all roles associated with a user based on their username, email, or ID.
   * @param {number} id - The unique identifier of the user.
   **/
  async getRoles(username, email, id) {
    try {
      const user = await User.findOne({ where: { id:id } });
      if (!user) return "User not found"
      const roles = await Role.findAll(
        {
          where: { user_id: user.id },
          include: [
            {
              model: Permission,
              attributes: [],
              through: {
                attributes: [
                  'id',
                  'name',
                  'description',
                  'created_at',
                  'updated_at',
                ],
              },
             
              required: true,
            },
          ],
        }
      )
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

export default new UserService();
