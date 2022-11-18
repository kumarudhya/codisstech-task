import jwt from 'jsonwebtoken';
function auth(req,res,next){
    const token=req.header('x-auth')
    if(!token) res.status(401).send("invalid token-access denied")
    try{
        const decoded=jwt.verify(token,'secret')
        req.user=decoded;
        next();
    } 
    catch(error){
        res.status(400).send("invalid token");
    }
}
export default auth;