import { NextApiRequest,NextApiResponse } from "next";

export default function getDetails( req: NextApiRequest,res: NextApiResponse)
{
    res.json({id: req.query.id,method: req.method,name:'abc',mailid:'abc@xyz.com',year:'2023',college:'mesc'});
}