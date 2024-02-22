import express from 'express'
import { Query } from 'express-serve-static-core'
import { User,validateMyData } from '../model/user.type'
const router = express.Router()

export interface TypedRequestQuery<T extends Query> extends Express.Request {
    query: T;
  }
router.post('/test',(req,res)=>{
    const result = req.body
    console.log(req.headers)
    console.log(req.method)
    if (validateMyData(result,res)) {
        res.send(result)
      }
})
router.get('/test/:id',(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})


router.get('/login',(req: TypedRequestQuery<User>,res)=>{
    // console.log(JSON.stringify(req.query))
    // console.log(typeof JSON.stringify(req.query))
    console.log(req.query.username)
    // console.log(typeof req.query)
    res.send(req.query.username+"From IP: ")
})

module.exports=router