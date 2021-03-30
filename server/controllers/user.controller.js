const {userService} = require("../services");

async function login(req,res) 
{
    const {email,password} = req.body;
    const status= await userService.login(email,password);
    res.json({status});

}

async function register(req,res) 
{
    const {userData} = req.body;
    const status = await userService.register(userData);
    res.json({status});
}
 
function updateById(req,res) 
{

}
 
function getById(req,res) 
{

}

module.exports = {register,updateById,getById,login}
