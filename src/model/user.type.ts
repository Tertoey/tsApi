// File: typesAndUtils.ts
import { Response } from 'express';

type MyData = {
    id: number;
    name: string;
};

// or use
// interface MyData {
//     id: number;
//     name: string;
// }

export function validateMyData(data: MyData, res: Response): boolean {
    if (typeof data.name !== 'string') {
        res.status(400).json({ error: 'Name type not string' });
        return false;
    }
    if (typeof data.id !== 'number') {
        res.status(400).json({ error: 'Id type not number' });
        return false;
    }
    return true;
};

export type User = { username: string; password: string };

export type Hotel = { room: string; type: string; price:number };