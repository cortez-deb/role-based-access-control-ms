import UserController from "../../controlers/user/index.js";
import validate from "../../functions/resource.js";
import userSchema from "../../schemas/user/index.js";
const routes = (app) => {
  const api = "/api/v1/user";

  app.post(
    `${api}/create`,
    validate(userSchema.userSchema_),
   async (req, res) =>{
    UserController.create(req, res)
   }
  );
  app.get(`${api}/:id`, async (req, res) => {
    UserController.get(req, res);
  });
  app.get(`${api}/email/:email`, async (req, res) => {
    UserController.getByEmail(req, res);
  });
  app.get(`${api}/username/:username`, 
    async (req, res) => {
      UserController.getByUsername(req, res)
    }
  );
  app.put(`${api}/:id`, 
   async (req, res) =>{
    UserController.update(req, res)
   }
);
  app.delete(`${api}/:id`, 
    async (req, res) => {
      UserController.delete(req, res)
    }
  );
  app.post(
    `${api}/assign/role`,
    validate(userSchema.assignRole),
   async (req, res) =>{
    UserController.assignRole(req, res)
   }
  );
  app.delete(
    `${api}/remove/role`,
    validate(userSchema.assignRole),
    async (req, res) => {
      UserController.removeRole(req, res)
    }
  );
  app.post(
    `${api}/give/permission`,
    validate(userSchema.givePermission),
   async (req, res) => {
    UserController.givePermission(req, res)
   }
  );
  app.delete(
    `${api}/revoke/permission`,
    validate(userSchema.givePermission),
    async (req, res) => {
      UserController.removePermission(req, res)
    }
  );
};

export default routes;
