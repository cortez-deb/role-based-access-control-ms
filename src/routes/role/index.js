import RoleController from '../../controlers/role/index.js';
import RoleSchemas from '../../schemas/role/index.js';


const routes = (app)=>{
    const api = '/api/vi/role';

    app.post(
        `${api}/create`,
        RoleSchemas.roleSchema.safeParse(req.body),
        RoleController.create(req, res)
    );

    app.get(
        `${api}/:id`,
        RoleController.get(req, res)
    );

    app.get(
        `${api}/department/:department`,
        RoleController.getDepartmentRoles(req, res)
    );

    app.put(
        `${api}/:id`,
        RoleSchemas.updateRoleSchema.safeParse(req.body),
        RoleController.update(req, res)
    );

    app.delete(
        `${api}/:id`,
        RoleController.delete(req, res)
    );
    app.get(
        `${api}/name/:name`,
        RoleController.getRoleByName(req, res)
    )
    app.post(
        `${api}/assign/permission/role/:id/permission/:permission_id`,
        RoleSchemas.assignPermissionSchema.safeParse(req.body),
        RoleController.assignPermission(req, res)
    );
    app.delete(
        `${api}/remove/permission/role/:id/permission/:permission_id`,
        RoleController.removePermission(req, res)
    );
    app.get(
        `${api}/permission/role/:id`,
        RoleController.getPermissionsByRole(req, res)
    );
}


export default routes