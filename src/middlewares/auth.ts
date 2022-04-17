 import {Request,Response} from "express";
 import jwt from "jsonwebtoken"
const auth = require('../config/auth.json');

 export default function(req:Request, res:Response, next) {
     
     const authHeader = req.headers.authorization;

     const route = req.path;
     if (route === '/auth/authenticate' || route === '/auth/register') {
        return next();
      }

     if(!authHeader) {
         return res.status(401).send({error: 'No token provided'})
     }

     const parts = authHeader.split(' ')

     if(!(parts.length === 2)) {
        return res.status(401).send({error: 'Token error'})
     }

     const[scheme,token]  = parts

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'Token malformatted'})
    }

    jwt.verify(token,auth.secret,(err, decoded) => {
        if(err) return res.status(401).send({error: 'Token invalid'})

        req['decoded'] = decoded.email;
    })


     next();
 }