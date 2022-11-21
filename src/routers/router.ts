import express from "express";
import {z} from "zod";
import { Schema } from "zod";
import validate from "../valid";
import {
    schema,
    SchemaType
} from '../zod-schema';

const router = express.Router();

const parks: SchemaType[] =[];

router.get('/', (req, res, next) => {
    return res.status(200).json(parks);
});

router.post('/', validate(schema), (req, res, next) => {
    const park = req.body as SchemaType;
    parks.push(park);
    return res.status(201).json({message: 'Added completed'});
});

router.put('/:id', validate(schema), (req, res, next) => {
    const updatePark = req.body as SchemaType;
    const  { id }  = req.params;
    const updated = parks.filter((park) => {
        return park.id !== id;
    });

    updated.push(updatePark);
    parks = updated;
    return res.status(201).json({message: "Updated..."})
});

router.delete('/:id', validate(schema), (req, res, next) => {
    const { id } = req.params;
    const deleted = parks.filter( (park) => {
        return park.id !== id;
    });
    parks = deleted;
    return res.status(201).json({message: "Date Deleted..."});
});

export default router;