import express, {Request,Response} from 'express'
import { Hotel,User } from '../model/user.type'
const router = express.Router()

router.post('/hotel',(req: Request<{}, {}, Hotel,User>,res)=>{
    const room = req.body.type
    const username = req.query.password
    console.log(username+room)
})

module.exports=router