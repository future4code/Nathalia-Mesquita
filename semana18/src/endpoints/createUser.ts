import express, {Request, Response} from "express";
import knex from "knex";
import cors from 'cors'
import {connection} from "../connection"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

type User = {
    id : string,
    name : string,
    password : string,
}

type Signup = {
    email : string,
    password : string,
}

app.post('/user/signup',async(req:Request,res:Response)=>{
    try {
        const rb = req.body;
        const newSignup: Signup = {
            id : rb.id,
            name : rb.name,
            password : rb.password
        }
        await connection('TBL_USER').insert(newSignup)
        res.status(200).send("created user successfuly!")
    } catch (error) {
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})