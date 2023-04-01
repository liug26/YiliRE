import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<{error: string, contents: Object}>)
{
    try
    {
        const fileContents = await fs.readFile('./re-static-data.json', 'utf8');
        res.status(200).json({error: '', contents: JSON.parse(fileContents)});
    }
    catch(error: any)
    {
        console.log(error.response.body)
        res.status(error.statusCode || 500).json({error: error.message, contents: ''});
    }
}