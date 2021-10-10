import { NextApiRequest,NextApiResponse } from 'next';

export default function getDetails(req:NextApiRequest,res:NextApiResponse){
    res.json({ collegename:'msec'});
}