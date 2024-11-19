import UserService from "../../services/user/index.js";
import ResponseService from "../../functions/response.js";

class UserController {
  /**
   * Creates a new user.
   *
   * @param {Object} req - The request object containing the user data.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {void}
   */
  async create(req, res) {
    const user = await UserService.create(req.body);
    if (!user) {
      ResponseService.error(res, "Failed to create user.");
    } else {
      ResponseService.success(res, user, "User created successfully.");
    }
  }
  /**
   * Retrieves a user by their unique identifier.
   *
   * @param {Object} req - The request object containing the user's unique identifier.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {void}
   */
  async get(req, res) {
    const user = await UserService.get(req.params.id);
    if (!user) {
      ResponseService.error(res, "User not found.");
    } else {
      ResponseService.success(res, user, "User retrieved successfully.");
    }
  }
  /**
   * Retrieves a user by their email address.
   *
   * @function getByEmail
   * @param {Object} req - The request object containing the user's email address.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {void}
   *
   * @example
   * getByEmail(req, res)
   *
   * @example
   * req.params.email = 'user@example.com';
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async getByEmail(req, res) {
    const user = await UserService.getByEmail(req.params.email);
    if (!user) {
      ResponseService.error(res, "User not found.");
    }
    else{
    ResponseService.success(res, user, "User retrieved successfully.");

    }
  }
  /**
   * Retrieves a user by their username.
   *
   * @function getByUsername
   * @param {Object} req - The request object containing the user's username.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {Promise<void>}
   *
   * @example
   * getByUsername(req, res)
   *
   * @example
   * req.params.username = 'john_doe';
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async getByUsername(req, res) {
    const user = await UserService.getByUserName(req.params.username);
    if (!user) {
      ResponseService.error(res, "User not found.");
    } else {
      ResponseService.success(res, user, "User retrieved successfully.");
    }
  }
  /**
   * Updates a user's information in the database.
   *
   * @function update
   * @param {Object} req - The request object containing the user's unique identifier and updated data.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {Promise<void>}
   *
   * @example
   * update(req, res)
   *
   * @example
   * req.params.id = '123';
   * req.body = {
   *   name: 'John Doe',
   *   email: 'john.doe@example.com',
   *   // ... other user fields
   * };
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async update(req, res) {
    const user = await UserService.update(req.params.id, req.body);
    if (!user) {
      ResponseService.error(res, "Failed to update user.");
    } else {
      ResponseService.success(res, user, "User updated successfully.");
    }
  }
  /**
   * Deletes a user from the database.
   *
   * @function delete
   * @param {Object} req - The request object containing the user's unique identifier.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {Promise<void>}
   *
   * @example
   * delete(req, res)
   *
   * @example
   * req.post.id = '123';
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async delete(req, res) {
    const success = await UserService.delete(req.params.id);
    if (!success) {
      ResponseService.error(res, "Failed to delete user.");
    } else {
      ResponseService.success(res, success, "User deleted successfully.");
    }
  }
  /**
   * Assigns a role to a user.
   *
   * @function assignRole
   * @param {Object} req - The request object containing the user's unique identifier and role identifier.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {Promise<Object>} - A promise that resolves to the updated user object if successful, or null if unsuccessful.
   *
   * @example
   * assignRole(req, res)
   *
   * @example
   * req.body.userId = '123';
   * req.body.roleId = '456';
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async assignRole(req, res) {
    const user = await UserService.assignRole(req.body.userId, req.body.roleId);
    if (!user) {
      ResponseService.error(res, "Failed to assign role.");
    } else {
      ResponseService.success(res, user, "Role assigned successfully.");
    }
  }
  /**
   * Removes a role from a user.
   *
   * @function removeRole
   * @param {Object} req - The request object containing the user's unique identifier and role identifier.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {Promise<Object>} - A promise that resolves to the updated user object if successful, or null if unsuccessful.
   *
   * @example
   * removeRole(req, res)
   *
   * @example
   * req.body.userId = '123';
   * req.body.roleId = '456';
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async removeRole(req, res) {
    const user = await UserService.removeRole(req.body.userId, req.body.roleId);
    if (!user) {
      ResponseService.error(res, "Failed to remove role.");
    } else {
      ResponseService.success(res, user, "Role removed successfully.");
    }
  }
  async getRoles (req, res){
    const roles = await UserService.getRoles(req.params.id);
    if (!roles) {
      ResponseService.error(res, "Failed to retrieve roles.");
    } else {
      ResponseService.success(res, roles, "Roles retrieved successfully.");
    }
  }
  /**
   * Assigns a permission to a user.
   *
   * @function assignPermission
   * @param {Object} req - The request object containing the user's unique identifier and permission identifier.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {Promise<Object>} - A promise that resolves to the updated user object if successful, or null if unsuccessful.
   *
   * @example
   * assignPermission(req, res)
   *
   * @example
   * req.body.userId = '123';
   * req.body.permissionId = '456';
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async assignPermission(req, res) {
    const user = await UserService.assignPermission(
      req.body.userId,
      req.body.permissionId
    );
    if (!user) {
      ResponseService.error(res, "Failed to assign permission.");
    } else {
      ResponseService.success(res, user, "Permission assigned successfully.");
    }
  }
  /**
   * Removes a permission from a user.
   *
   * @function removePermission
   * @param {Object} req - The request object containing the user's unique identifier and permission identifier.
   * @param {Object} res - The response object to send the response.
   *
   * @returns {Promise<Object>} - A promise that resolves to the updated user object if successful, or null if unsuccessful.
   *
   * @example
   * removePermission(req, res)
   *
   * @example
   * req.body.userId = '123';
   * req.body.permissionId = '456';
   *
   * @example
   * res = {
   *   send: function(response) {
   *     console.log(response);
   *   }
   * };
   */
  async removePermission(req, res) {
    const user = await UserService.removePermission(
      req.body.userId,
      req.body.permissionId
    );
    if (!user) {
      ResponseService.error(res, "Failed to remove permission.");
    } else {
      ResponseService.success(res, user, "Permission removed successfully.");
    }
  }
}

export default new UserController();
