import { object, string } from "zod";

const userSchema_ = object({
  body: object({
    email: string({
        description: "The email address of the user.",
        format: "email",
        required: true,
        required_error: "Please provide a valid email address",
    }),
    username: string({
        description: "The username of the user.",
        min_length: 1,
        max_length: 50,
        required: true,
        required_error: "Please provide a username",
    }),
    role: string({
        description: "The role of the user.",
        min_length: 1,
        max_length: 50,
        required: true,
        required_error: "Please provide a role",
    })
  }),
});

const assignRole = object({
    body:object({
        roleId: string({
            description: "The unique identifier of the role.",
            required: true,
            required_error: "Please provide a role for the user",
        }),
        userId: string({
            description: "The unique identifier of the user.",
            required: true,
            required_error: "Please provide a user for the role",
        })
    })
})

const givePermission = object({
    body: object({
        permissionId: string({
            description: "The unique identifier of the permission.",
            required: true,
            required_error: "Please provide a permission for the user",
        }),
        userId: string({
            description: "The unique identifier of the user.",
            required: true,
            required_error: "Please provide a user for the permission",
        })
    })
})


const userSchema={
    userSchema_,
    assignRole,
    givePermission,
}

export default userSchema;