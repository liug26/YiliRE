import type { NextApiRequest, NextApiResponse } from 'next'
import data from '@/public/re-static-data.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{error: string, contents: Object}>)
{
    try
    {
        res.status(200).json({error: '', contents: data});
    }
    catch(error: any)
    {
        console.log(error)
        res.status(error.statusCode || 500).json({error: error.message, contents: ''});
    }
}