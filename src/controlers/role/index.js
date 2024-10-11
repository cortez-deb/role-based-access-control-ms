import ResponseService from "../../functions/response.js";
import RoleService from '../../services/role/index.js'


class RoleController {
    /**
     * Creates a new role.
     *
     * @param {Object} req - The request object containing the role data.
     * @param {Object} res - The response object to send the response.
     *
     * @returns {void}
     */
    async create(req, res) {
        const role = await RoleService.create(req.body);
        if (!role) {
            ResponseService.error(
                res,
                "Failed to create role."
            )
        }
        ResponseService.success(
            res,
            role,
            "Role created successfully."
        )
    }
    /**
     * Retrieves a role by its ID.
     *
     * @param {Object} req - The request object containing the role ID in the params.
     * @param {Object} res - The response object to send the response.
     *
     * @returns {void}
     */
    async get(req, res) {
        const role = await RoleService.get(req.params.id);
        if (!role) {
            ResponseService.error(
                res,
                "Role not found."
            )
        }
        ResponseService.success(
            res,
            role,
            "Role retrieved successfully."
        )
    }
    /**
     * Retrieves roles associated with a specific department.
     *
     * @param {Object} req - The request object containing the department ID in the params.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.department - The ID of the department for which to retrieve roles.
     *
     * @returns {void}
     *
     * @example
     * // Request: GET /roles/department/123
     * // Response:
     * // {
     * //   "status": "success",
     * //   "data": [
     * //     {
     * //       "id": 1,
     * //       "name": "Manager",
     * //       "department": "123",
     * //       // ... other role properties
     * //     },
     * //     // ... other roles
     * //   ],
     * //   "message": "Roles retrieved successfully."
     * // }
     */
    async getDepartmentRoles(req, res) {
        const roles = await RoleService.getDepartmentRoles(req.params.department);
        if (!roles) {
            ResponseService.error(
                res,
                "Failed to retrieve roles for department."
            )
        }
        ResponseService.success(
            res,
            roles,
            "Roles retrieved successfully."
        )
    }
    /**
     * Updates an existing role by its ID.
     *
     * @function update
     * @param {Object} req - The request object containing the role ID and updated data in the params and body respectively.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.id - The ID of the role to update.
     * @param {Object} req.body - The updated role data.
     *
     * @returns {void}
     *
     * @example
     * // Request: PUT /roles/123
     * // Body: { "name": "New Manager" }
     * // Response:
     * // {
     * //   "status": "success",
     * //   "data": {
     * //     "id": 123,
     * //     "name": "New Manager",
     * //     // ... other role properties
     * //   },
     * //   "message": "Role updated successfully."
     * // }
     */
    async update(req, res) {
        const role = await RoleService.update(req.params.id, req.body);
        if (!role) {
            ResponseService.error(
                res,
                "Failed to update role."
            )
        }
        ResponseService.success(
            res,
            role,
            "Role updated successfully."
        )
    }
    /**
     * Deletes a role by its ID.
     *
     * @function delete
     * @param {Object} req - The request object containing the role ID in the params.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.id - The ID of the role to delete.
     *
     * @returns {void}
     *
     * @example
     * // Request: DELETE /roles/123
     * // Response:
     * // {
     * //   "status": "success",
     * //   "data": {
     * //     "id": 123,
     * //     "name": "Manager",
     * //     // ... other role properties
     * //   },
     * //   "message": "Role deleted successfully."
     * // }
     * //
     * // If the role is not found:
     * // Response:
     * // {
     * //   "status": "error",
     * //   "message": "Failed to delete role."
     * // }
     */
    async delete(req, res) {
        const role = await RoleService.delete(req.params.id)
        if(!role) {
            ResponseService.error(
                res,
                "Failed to delete role."
            )
        }
        ResponseService.success(
            res,
            role,
            "Role deleted successfully."
        )
    }
    /**
     * Retrieves a role by its name.
     *
     * @function getRoleByName
     * @param {Object} req - The request object containing the role name in the params.
     * @param {Object} res - The response object to send the response.
     * @param {string} req.params.name - The name of the role to retrieve.
     *
     * @returns {Promise<Object>} - A promise that resolves to the retrieved role or null if not found.
     *
     * @example
     * // Request: GET /roles/name/Manager
     * // Response:
     * // {
     * //   "status": "success",
     * //   "data": {
     * //     "id": 1,
     * //     "name": "Manager",
     * //     // ... other role properties
     * //   },
     * //   "message": "Role retrieved successfully."
     * // }
     * //
     * // If the role is not found:
     * // Response:
     * // {
     * //   "status": "error",
     * //   "message": "Role not found."
     * // }
     */
    async getRoleByName(req, res) {
        const role = await RoleService.getRoleByName(req.params.name);
        if (!role) {
            ResponseService.error(
                res,
                "Role not found."
            )
        }
        ResponseService.success(
            res,
            role,
            "Role retrieved successfully."
        )
    }
}

export default new RoleController();