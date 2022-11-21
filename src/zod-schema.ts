import {z, TypeOf} from 'zod';

export const schema = z.object ({
    body: z.object({
        id: z
        .string({ required_error: 'ID is required ..'})
        .min(3),
        name: z
        .string({required_error: 'Name is required ..'})
        .min(5, 'Name Is Required'),
        type: z
        .enum(['rollercoaster', 'thriller','water'],
        { required_error: 'Type is required !' }),
        tickets: z
        .number({required_error: 'Tickets is required ..'}),
        price: z
        .number({required_error: 'Price is required ..'}),
    })
})

export type SchemaType = TypeOf<typeof schema>['body'];
