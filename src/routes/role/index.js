import RoleController from '../../controlers/role/index.js';
import validate from '../../functions/validateResource.js';
import RoleSchemas from '../../schemas/role/index.js';


const routes = (app)=>{
    const api = '/api/v1/role';

    app.post(
        `${api}/create`,
        validate(RoleSchemas.roleSchema),
        async (req, res) =>{
            RoleController.create(req, res)
        }
    );

    app.get(
        `${api}/:id`,
        async(req, res) =>{
            RoleController.get(req, res)
        }
    );

    app.get(
        `${api}/department/:department`,
       async (req, res) =>{
        RoleController.getDepartmentRoles(req, res)
       }
    );

    app.put(
        `${api}/:id`,
        async (req, res) =>{
            RoleController.update(req, res)
        }
    );

    app.delete(
        `${api}/:id`,
        async (req, res) => {
            RoleController.delete(req, res)
        }
    );
    app.get(
        `${api}/name/:name`,
        async (req, res) => {
            RoleController.getRoleByName(req, res)
        }
    )
    app.post(
        `${api}/assign/permission/role/:id/permission/:permission_id`,
        async (req, res) => {
            RoleController.assignPermission(req, res)
        }
    );
    app.delete(
        `${api}/remove/permission/role/:id/permission/:permission_id`,
        async (req, res) => {
            RoleController.removePermission(req, res)
        }
    );
    app.get(
        `${api}/permission/role/:id`,
        async (req, res) => {
            RoleController.getPermissionsByRole(req, res)
        }
    );
}


export default routes