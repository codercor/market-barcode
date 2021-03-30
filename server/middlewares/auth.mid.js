const {checkToken} = require("../utils/token")

function auth(req,res,next) {
    const {token} = req.headers;
    console.log(token)

   try {
    checkToken(token);
    next();
   } catch (error) {
     res.json({status:"Permission denied"})  
   }
    
}

module.exports = auth;