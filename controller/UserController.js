import User from'../models/userModel.js'

export async function createUser(name){
    
    const newUser = await new User(name)
   
    const result = await newUser.save()
    
    return result
}

export async function listUser(){
    const usersList = await User
      .find()
    
      return usersList
}

export async function showOneUser(name){
    const myUser = await User
    
    .findOne({name:name})
    
    return myUser
}

export async function updateUser(name, body) {
    return await User.findOneAndUpdate({name:name}, {...body})
}

export async function deleteOneUser(name){
    const myUserDeleted = await User
    
    .deleteOne({name:name})

    return myUserDeleted
}

