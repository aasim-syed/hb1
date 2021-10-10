import { NextApiRequest,NextApiResponse } from "next";

export default function getDetails(req:NextApiRequest,res:NextApiResponse){
    res.json({byId: req.query.id,collegename:'msec'});
}