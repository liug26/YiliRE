import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey('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');

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse<{error: string}>)
{
    await sendgrid.send(
    {
        to: 'liug22@hotmail.com',
        from: 'dawangyi1@126.com',
        subject: 'Contact Recorded',
        text: `Time recorded: ${new Date(Date.now()).toLocaleString()}\nFull name: ${req.body.fullname}\nEmail: ${req.body.email}\n
        Phone: ${req.body.phone}\nPrice point: ${req.body.price}\nMessage: ${req.body.message}`,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }).then(() => 
    {
        return res.status(200).json({error: ''});
    }).catch((error: any) => 
    {
        console.log(error.response.body)
        return res.status(error.statusCode || 500).json({error: error.message});
    });
}