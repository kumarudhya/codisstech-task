import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User , {  validateCustomer } from '../model/model.js';

//register data in collection
const newCustomer = (req, res) => {
  
    const saltRoute = 10;
    
    bcrypt.hash(req.body.password, saltRoute, async function (err, hash) {
        var newUser = {
            name: req.body.name,
            emailId: req.body.emailId,
            password: hash,
            mobileNo: req.body.mobileNo,

        }
        console.log(newUser);
        async function createUser() {
            
            try {
                var existingUser = await User.findOne({ emailId: req.body.emailId })
                console.log(existingUser);
                console.log(existingUser);
                // console.log(existingUser);                   

                if (!existingUser) {
                    var user = await User.insertMany([newUser])
                    res.status(200).send(user);
                }

                else {
                    res.status(400).send("User can already exist!")
                }
            }
            catch (error) {
                res.status(400).send(error.message)
            }
        } createUser();
    })

}

export {newCustomer};