const express = require("express");
const regModel = require("../models/register-schema");
const route = express.Router();

//register an account
route.post("/user/add", async (req, res) => {
  const customer = new regModel(req.body);
  try {
    const newAccount = await customer.save();
    if (!newAccount) {
      throw Error("Something Went Wrong");
    }
    res.status(200).json(newAccount);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});

//get all registered accounts
route.get('/user',async (req , res)=>{
 try{
   const getAllUsers = await regModel.find();
   if(!getAllUsers){
       throw Error("There no any accounts yet!");
   }
   res.status(200).json(getAllUsers);
 }catch(e){
  res.status(400).json({msg : e});
 }
});

//get registered account by id
route.get('/user/:id',async (req , res)=>{
  try{
      const userById = await regModel.findById(req.params.id);
      if(!userById){
          throw Error("This Account Not Found!");
      }
      res.status(200).json(userById);
  }catch(e){
      res.status(400).json({msg : e});
  }
});

module.exports = route;