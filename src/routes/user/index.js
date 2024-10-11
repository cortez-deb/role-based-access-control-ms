import UserController from "../../controlers/user/index.js";
import validate from "../../functions/resource.js";
import userSchema from "../../schemas/user/index.js";
const routes = (app) => {
  const api = "/api/vi/user";

  app.post(
    `${api}/create`,
    validate(userSchema.userSchema_),
    UserController.create(req, res)
  );
  app.get(`${api}/:id`, UserController.get(req, res));
  app.get(`${api}/email/:email`, UserController.getByEmail(req, res));
  app.get(`${api}/username/:username`, UserController.getByUsername(req, res));
  app.put(`${api}/:id`, validate(userSchema), UserController.update(req, res));
  app.delete(`${api}/:id`, UserController.delete(req, res));
  app.post(
    `${api}/assign/role`,
    validate(userSchema.assignRole),
    UserController.assignRole(req, res)
  );
  app.delete(
    `${api}/remove/role`,
    validate(userSchema.assignRole),
    UserController.removeRole(req, res)
  );
  app.post(
    `${api}/give/permission`,
    validate(userSchema.givePermission),
    UserController.givePermission(req, res)
  );
  app.delete(
    `${api}/revoke/permission`,
    validate(userSchema.givePermission),
    UserController.revokePermission(req, res)
  );
};

export default routes;
