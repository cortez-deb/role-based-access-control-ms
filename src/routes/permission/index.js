import PermissionController from '../../controlers/permision/index.js'
import permisionSchema from '../../schemas/permission/index.js'

const routes = (app) => {
    const api = '/api/vi/permission'

    app.post(
        `${api}/create`,
        permisionSchema.permissionSchema.safeParse(req.body),
        PermissionController.create(req, res)
    );

    app.get(`${api}/:id`, PermissionController.get(req, res))
    app.get(`${api}/name/:name`, PermissionController.getByName(req, res))
    app.get(`${api}/role/:roleId`, PermissionController.getAllByRole(req, res))
    app.put(`${api}/:id`, PermissionController.update(req, res))
    app.delete(`${api}/:id`, PermissionController.delete(req, res))
}

export default routes