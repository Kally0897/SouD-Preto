const UserSchema = require("../models/UserSchema");
const bcrypt = require('bcrypt');



const allUsers = async (request, response) => {
  UserSchema.find(function (error, users) {
    if(error) {
      response.status(500).send({ message: error.message })
    }
      response.status(200).send(users)
  }) 
};

const creatUser = async( request, response) => {
   const hashedPassword = bcrypt.hashSync(request.body.password, 05)
   request.body.password = hashedPassword

   const emailExists = await UserSchema.exists({email: request.body.email})

   if(emailExists){
    return response.status(409).send({
      message: "Email já cadastrado, para novo usuárioa, favor cadastrar outro email"
    })
   }
  
   try{
    const newUser = new UserSchema(request.body)

    const savedUser = await newUser.save()

    response.status(201).send({
      message: "Usuário criado com sucesso",
      savedUser
    })
   }catch(error){
    console.error(error);
    response.status(500).send({
      message: error.message
    })
   }


}

const updateUser = async (request, response) => {

}

const deleteUser = async (request, response) => {

}


module.exports = {
    allUsers,
    creatUser,
    updateUser,
    deleteUser
};