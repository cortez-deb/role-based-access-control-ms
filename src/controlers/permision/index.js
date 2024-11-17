import ResponseService from "../../functions/response.js";
import PermissionService from "../../services/permision/index.js";


class PermissionController {
    /**
     * Creates a new permission.
     *
     * @param {Object} req - The request object containing the permission data.
     * @param {Object} res - The response object to send the response.
     *
     * @returns {void}
     */
    async create(req, res) {
        const permission = await PermissionService.create(req.body);
        if (!permission) {
            ResponseService.error(
                res,
                "Failed to create permission."
            )
        }
        ResponseService.success(
            res,
            permission,
            "Permission created successfully."
        )
    }
    /**
     * Retrieves a permission by its ID.
     *
     * @param {Object} req - The request object containing the permission ID.
     * @param {Object} res - The response object to send the response.
     *
     * @returns {void}
     */
    async get(req, res) {
        const permission = await PermissionService.get(req.params.id);
        if (!permission) {
            ResponseService.error(
                res,
                "Permission not found."
            )
        }
        ResponseService.success(
            res,
            permission,
            "Permission retrieved successfully."
        )
    }
    /**
     * Retrieves a permission by its name.
     *
     * @function getByName
     * @param {Object} req - The request object containing the permission name.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.name - The name of the permission to retrieve.
     *
     * @returns {Promise<void>}
     * @fulfills {Object} - The retrieved permission.
     * @rejects {Object} - An error object with a message property indicating the failure reason.
     */
    async getByName(req, res) {
        const permission = await PermissionService.getByName(req.params.name);
        if (!permission) {
            ResponseService.error(
                res,
                "Permission not found."
            )
        }
        ResponseService.success(
            res,
            permission,
            "Permission retrieved successfully."
        )
    }
    /**
     * Retrieves all permissions associated with a specific role.
     *
     * @function getAllByRole
     * @param {Object} req - The request object containing the role ID.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.roleId - The ID of the role to retrieve permissions for.
     *
     * @returns {Promise<void>}
     * @fulfills {Array} - An array of permissions associated with the specified role.
     * @rejects {Object} - An error object with a message property indicating the failure reason.
     */
    async getAllByRole(req, res) {
        const permissions = await PermissionService.getAllByRole(req.params.roleId);
        if (!permissions) {
            ResponseService.error(
                res,
                "Failed to retrieve permissions for role."
            )
        }
        ResponseService.success(
            res,
            permissions,
            "Permissions retrieved successfully."
        )
    }
    /**
     * Updates an existing permission.
     *
     * @function update
     * @param {Object} req - The request object containing the permission ID and updated data.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.id - The ID of the permission to update.
     * @param {Object} req.body - The updated permission data.
     *
     * @returns {Promise<void>}
     * @fulfills {Object} - The updated permission.
     * @rejects {Object} - An error object with a message property indicating the failure reason.
     */
    async update(req, res) {
        const permission = await PermissionService.update(req.params.id, req.body);
        if (!permission) {
            ResponseService.error(
                res,
                "Failed to update permission."
            )
        }
        ResponseService.success(
            res,
            permission,
            "Permission updated successfully."
        )
    }
    /**
     * Deletes a permission by its ID.
     *
     * @function delete
     * @param {Object} req - The request object containing the permission ID.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.id - The ID of the permission to delete.
     *
     * @returns {Promise<void>}
     * @fulfills {undefined} - No value is returned upon successful deletion.
     * @rejects {Object} - An error object with a message property indicating the failure reason.
     */
    async delete(req, res) {
        const success = await PermissionService.delete(req.params.id);
        if (!success) {
            ResponseService.error(
                res,
                "Failed to delete permission."
            )
        }
        ResponseService.success(
            res,
            null,
            "Permission deleted successfully."
        )
    }
}

export default PermissionController;