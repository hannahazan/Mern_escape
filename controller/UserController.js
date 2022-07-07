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
    
    .findOne({id:name})
    
    return myUser
}

export function updateUser(name, body) {
    return User.findOneAndUpdate({id:name}, {...body})
}

export async function deleteOneUser(name){
    const myUserDeleted = await User
    
    .deleteOne({id:name})

    return myUserDeleted
}

