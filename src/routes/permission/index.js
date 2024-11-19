import PermissionController from '../../controlers/permision/index.js'
import permisionSchema from '../../schemas/permission/index.js'
import validate from '../../functions/validateResource.js'
const routes = (app) => {
    const api = '/api/vi/permission'

    app.post(
        `${api}/create`,
        validate(permisionSchema),
        async(req,res)=>{
            PermissionController.create(req,res)
        }
    );

    app.get(`${api}/:id`, async(req,res)=>{
        PermissionController.get(req,res)
    }, )
    app.get(`${api}/getbyname/:name`,async(req,res) => {
        PermissionController.getByName(req,res)
    })
    app.get(`${api}/role/:roleId`, async (req,res) =>{
        PermissionController.getAllByRole(req,res)
    })
    app.put(`${api}/:id`, async (req,res) =>{
        PermissionController.update(req,res)
    })
    app.delete(`${api}/:id`, async (req, res) => {
        PermissionController.delete(req,res)
    })
    app.get(`${api}/get/all/departments`, async (req, res) => {
        PermissionController.getAll(req, res)
    })
}

export default routes