import express from "express";
import associateModels from "./models/associations.js";
import sequelize from "./models/index.js";
import Permissionroutes from './routes/permission/index.js'
import RoleRoutes from './routes/role/index.js'
import UserRoutes from './routes/user/index.js'
const app = express();
app.use(express.json());

// Initialize models and associations
associateModels();

const PORT = process.env.PORT || 3000;
sequelize.authenticate().then(() => {
    console.log("Database connected...");
  }).catch((err) => console.error("Unable to connect to the database:", err));

app.use(Permissionroutes(app))
app.use(RoleRoutes(app))
app.use(UserRoutes(app))

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});