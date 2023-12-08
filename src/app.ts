import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import cookieparser from 'cookie-parser'
const UserRouter = require('./route/login')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(UserRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})