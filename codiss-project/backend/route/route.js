import express from "express";
import bodyParser from 'body-parser';
import { newCustomer } from "../controller/register.js";
import { userLogin } from "../controller/login.js";


const App=express();
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.text())
const router=express.Router();

//register route
router.post('/register',newCustomer);
router.post('/login',userLogin);

export default router;
    


