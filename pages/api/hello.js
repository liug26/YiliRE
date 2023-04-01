// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs';

export default async function handler(req, res)
{
    const fileContents = await fs.readFile(process.cwd() + '/public/re-static-data.json', 'utf8');
    res.status(200).json({ name: 'John Doe' })
}