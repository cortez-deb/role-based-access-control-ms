import User from "./user.js";
import Role from "./role.js";
import Permission from "./permission.js"; // Make sure you have the Permission model imported

const associateModels = () => {
    Role.associate({ User, Permission });
    User.associate({ Role });
};

export default associateModels;
