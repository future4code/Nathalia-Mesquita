import app from "./app";
import signup from "./endpoints/signup";
import createUser from "./endpoints/createUser";
import {generatedId} from "../services/idGenerator"

console.log({generatedId});

app.post("/user", createUser)
app.post("/user/signup", signup)
