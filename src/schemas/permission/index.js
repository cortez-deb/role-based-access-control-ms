import { object, string } from "zod";

const permisionSchema = object({
    body: object({
        id: string({
            description: "The unique identifier of the permission.",
            required: true,
            required_error: "Please provide a unique identifier"
        }),
        name: string({
            description: "The name of the permission.",
            min_length: 1,
            max_length: 50,
            required: true,
            required_error: "Please provide a name for the permission"
        }),
        action: string({
            description: "The action associated with the permission.",
            min_length: 1,
            max_length: 50,
            required: true,
            required_error: "Please provide an action for the permission"
        }),
        resource: string({
            description: "The resource associated with the permission.",
            min_length: 1,
            max_length: 50,
            required: true,
            required_error: "Please provide a resource for the permission"
        }),
        role_id: string({
            description: "The unique identifier of the role.",
            required: true,
            required_error: "Please provide a role for the permission"
        })
    })
})

export default permisionSchema;