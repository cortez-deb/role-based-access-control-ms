import Role from "../../models/role.js";
class RoleService {
    /**
     * Creates a new role in the database.
     *
     * @param {Object} data - The data for the new role.
     * @param {string} data.name - The name of the role.
     * @param {string} data.department - The department the role belongs to.
     * @param {string} data.description - A brief description of the role.
     * @returns {Promise<Role|null>} - A promise that resolves to the created role or null if an error occurs.
     */
    async create(data) {
        try {
            const role = await Role.create(data); 
            return role;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    /**
     * Retrieves a role from the database by its ID.
     *
     * @param {number} id - The ID of the role to retrieve.
     * @returns {Promise<Role|null>} - A promise that resolves to the retrieved role or null if an error occurs.
     */
    async get(id) {
        try {
            const role = await Role.findByPk(id);
            return role;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    /**
     * Retrieves all roles from the database that belong to a specific department.
     *
     * @param {string} department - The department to filter roles by.
     * @returns {Promise<Role[]|null>} - A promise that resolves to an array of roles belonging to the specified department,
     * or null if an error occurs.
     */
    async getDepartmentRoles(department) {
        try {
            const roles = await Role.findAll({ where: { department } });
            return roles;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    /**
     * Retrieves a role from the database by its name.
     *
     * @param {string} name - The name of the role to retrieve.
     * @returns {Promise<Role|null>} - A promise that resolves to the retrieved role or null if an error occurs.
     * The function attempts to find a role in the database by its name using Sequelize's `findOne` method.
     * If the role is found, it is returned. If an error occurs during the database operation,
     * the error is logged to the console and null is returned.
     */
    async getRoleByName(name){
        try {
            const role = await Role.findOne({ where: { name } });
            return role;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    /**
     * Updates an existing role in the database.
     *
     * @param {number} id - The ID of the role to update.
     * @param {Object} data - The updated data for the role.
     * @returns {Promise<Role|null>} - A promise that resolves to the updated role or null if an error occurs.
     * If the role with the given ID does not exist in the database, the function returns null.
     * If an error occurs during the database operation, the error is logged to the console and null is returned.
     */
    async update(id, data) {
        try {
            const role = await Role.findByPk(id);
            if (!role) return null;
            await role.update(data);
            return role;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    /**
     * Deletes a role from the database by its ID.
     *
     * @param {number} id - The ID of the role to delete.
     * @returns {Promise<boolean>} - A promise that resolves to true if the role is successfully deleted,
     * or false if an error occurs or the role does not exist.
     *
     * @throws Will throw an error if the database operation fails.
     */
    async delete(id) {
        try {
            const role = await Role.findByPk(id);
            if (!role) return null;
            await role.destroy();
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}

export default new RoleService();