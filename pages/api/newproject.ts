import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/User'
import { getSession } from 'next-auth/react'
const handler = async (req:NextApiRequest,res:NextApiResponse) =>{
const session = await getSession({req});
if(session){
    const user = User.findById(session?.user?.id);
    if(user){
        const project = await  User.create({
            name:user.id;
            
        })
        res.status(200).json({project});
    }
    else{
        res.status(404).json({message:"user not found"});
    }
}
    
} 