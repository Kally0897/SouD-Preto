const UserSchema = require("../models/UserSchema");
const bcrypt = require('bcrypt');
const { find } = require("../models/UserSchema");



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
      message: "Email já cadastrado! Para novo usuário(a), favor cadastrar outro email"
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
  const { nome, email, password } = request.body
  const id = request.params.id


  try{
    const findUser = await UserSchema.findById(id)

    if(!findUser){
      return response.status(404).json({
        message: "Usuário não encontrado"
      })
    }

    findUser.password = (password && bcrypt.hashSync(password, SALT) )|| findUser.password;
    findUser.nome = nome || findUser.nome
    findUser.email = email || findUser.email


    const userUpdated = await findUser.save();

    return response.status(200).json({
      message: `Usuário atualizado: ${userUpdated}`
    })
  }catch(error){
    return response.status(500).json({
      message: error.message
    })
  }
}

const deleteUser = async (request, response) => {
const { id } = request.params

try{
  const findUser = await UserSchema.findById(id)

  if(!findUser){
  return response.status(404).json({
    message: "Usuário não encontrado"
  })
 }

 await findUser.delete()

 return response.status(200).json({
  message: "Usuário deletado com sucesso"
 })
}catch(error){
  response.status(500).json({
    message: error.message
  })
}


}


module.exports = {
    allUsers,
    creatUser,
    updateUser,
    deleteUser
};