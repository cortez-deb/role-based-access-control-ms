import Permission from "../../models/permission.js";

class PermissionService {
  /**
   * Creates a new permission in the database.
   *
   * @param {Object} data - The data for the new permission.
   * @param {string} data.name - The name of the permission.
   * @param {number} data.role_id - The ID of the role associated with the permission.
   *
   * @returns {Promise<Permission|null>} - A promise that resolves to the created permission or null if an error occurs.
   */
  async create(data) {
    try {
      const permission = await Permission.create({ ...data });
      return permission;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  /**
   * Retrieves a permission from the database by its ID.
   *
   * @param {number} id - The ID of the permission to retrieve.
   *
   * @returns {Promise<Permission|null>} - A promise that resolves to the Permission object with the given ID,
   * or null if an error occurs or the permission was not found.
   */
  async get(id) {
    try {
      const permission = await Permission.findByPk(id);
      return permission;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  /**
   * Retrieves a permission from the database by its name.
   *
   * @param {string} name - The name of the permission to retrieve.
   *
   * @returns {Promise<Permission|null>} - A promise that resolves to the Permission object with the given name,
   * or null if an error occurs or the permission was not found.
   */
  async getByName(name) {
    try {
      const permission = await Permission.findAll({ where: { name } });
      return permission;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  /**
   * Retrieves all permissions associated with a specific role from the database.
   *
   * @param {number} roleId - The ID of the role to retrieve permissions for.
   *
   * @returns {Promise<Permission[]|null>} - A promise that resolves to an array of Permission objects associated with the given role,
   * or null if an error occurs.
   */
  async getAllByRole(roleId) {
    try {
      const permissions = await Permission.findAll({
        where: {
          role_id: roleId,
        },
      });
      return permissions;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  /**
   * Updates a permission in the database by its ID.
   *
   * @param {number} id - The ID of the permission to update.
   * @param {Object} data - The updated data for the permission.
   * @param {string} [data.name] - The new name of the permission.
   * @param {number} [data.role_id] - The new ID of the role associated with the permission.
   *
   * @returns {Promise<Permission|null>} - A promise that resolves to the updated permission or null if an error occurs or the permission was not found.
   */
  async update(id, data) {
    try {
      const permission = await Permission.findByPk(id);
      if (!permission) return null;
      await permission.update(data);
      permission.save();
      return permission;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  /**
   * Deletes a permission from the database by its ID.
   *
   * @param {number} id - The ID of the permission to delete.
   *
   * @returns {Promise<boolean>} - A promise that resolves to true if the permission was successfully deleted,
   * or false if an error occurred or the permission was not found.
   */
  async delete(id, action) {
    try {
      await Permission.destroy({
        where: {
          id: id,
          action: action,
        },
      });
  
      return true;
    
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  
  async getAll() {
    try {
      const permissions = await Permission.findAll();
      return permissions;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

export default new PermissionService();
