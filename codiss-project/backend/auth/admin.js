function Admin(req, res, next) {
   
  if (!req.User.isAdmin === true) {
    
    return res.status(403).send("access denied");
  
  }
  else{
    next();
  }
  }
export default Admin;