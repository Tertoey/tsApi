import express from 'express'
import { Query } from 'express-serve-static-core'
import { User } from '../model/user.type';
const router = express.Router()

export interface TypedRequestQuery<T extends Query> extends Express.Request {
    query: T;
  }

router.get('/',(req,res)=>{
    res.send(req.headers)
})

router.get('/login',(req: TypedRequestQuery<User>,res)=>{
    res.json(req.query)
})

module.exports=router