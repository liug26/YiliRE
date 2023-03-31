import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from 'next'

// based on https://blog.csdn.net/m0_37263637/article/details/80514549
export default async (req: NextApiRequest, res: NextApiResponse<{error: string}>) =>
{
    const foi = (req.body.foi['Buy Home'] ? 'Buy ' : '') + (req.body.foi['Sell Home'] ? 'Sell ' : '') + (req.body.foi['Other'] ? 'Other ' : '');
    const transporter = nodemailer.createTransport(
    {
        host: 'smtp.126.com',
        port: 465,
        secure: true,
        auth:
        {
            user: 'dawangyi1@126.com',
            pass: 'ATQTEXTFGUCJFVLG'
        }
    });

    await transporter.sendMail(
    {
        from: 'dawangyi1@126.com',
        to: req.body.emailTo,
        subject: `Contact Recorded`,
        text: `Time recorded: ${new Date(Date.now()).toLocaleString()}\nFull name: ${req.body.fullname}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nField of interest: ${foi}\nPrice point: ${req.body.price}\nMessage: ${req.body.message == '' ? 'none' : req.body.message}`
    }).then(() => 
    {
        return res.status(200).json({error: ''});
    }).catch((error: any) => 
    {
        console.log(error)
        return res.status(error.statusCode || 500).json({error: error});
    });
};