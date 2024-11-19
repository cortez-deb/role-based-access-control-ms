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
    `${api}/remove/role/:id`,
    async (req, res) => {
      UserController.removeRole(req, res)
    }
  );
  app.get(`${api}/get-roles/:id`, async (req,res)=>{
    UserController.getRoles(req, res)
  })
  app.get(`${api}/get-permissions/:id`, async (req,res)=>{
    UserController.getPermissions(req, res)
  })
  app.post(
    `${api}/process/login/request/:id`,
   async (req, res) =>{
    UserController.processLoginRequest(req, res)
   })
};

export default routes;
