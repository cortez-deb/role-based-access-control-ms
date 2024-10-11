import { object, string, number } from "zod";

const roleSchema = object({
    body: object({
        id: string(
            {
                description: "The unique identifier of the role.",
                required: true,
                required_error: "Please provide a unique identifier"
            }
        ),
        name: string({
            description: "The name of the role.",
            min_length: 1,
            max_length: 50,
            required: true,
            required_error: "Please provide a name for the role"
        }),
        department: string({
            description: "The department associated with the role.",
            min_length: 1,
            max_length: 50,
            optional: true
        })
    })
})

const updateRoleSchema = object({
    param: {
        id: string(
            {
                description: "The unique identifier of the role.",
                required: true,
                required_error: "Please provide a unique identifier"
            }
        )
    }
})
const RoleSchemas ={
    roleSchema,
    updateRoleSchema
}

export default RoleSchemas;