import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User ,{  validateCustomer } from '../model/model.js';

const userLogin = async (req, res) => {

    try {
        var existingUser = await User.findOne({ emailId: req.body.emailId })
        // console.log(existingUser);
        if (existingUser) {
            bcrypt.compare(req.body.password, existingUser.password, function (err, result) {
                if (result) {
                    console.log("Login Succesfully");
                    const token = jwt.sign({ _id: existingUser._id, isUser: existingUser.isUser, emailId: existingUser.emailId }, process.env.JWT)
                    return res.header('x-auth', token).status(200).send(token);
                    
                }
                if (!result) {
                    return res.status(400).send("invalid password");

                }
            })
        }

        if (!existingUser) {
            return res.status(400).send("invalid email");
        }


    }
    catch (error) {
        return res.status(400).send(error.message)
    }


}

export { userLogin };