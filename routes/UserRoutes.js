import express from 'express'
import {createUser,listUser,showOneUser,updateUser,deleteOneUser } from '../controller/UserController.js';
const routerUsers = express.Router()
routerUsers.use(express.json())
routerUsers.use(express.urlencoded({ extended: true }))

routerUsers.get('/', async (req, res) => {
    let users = await listUser()
    res.json(users);
})

routerUsers.get('/:id', async (req, res) => {
    let userName = await showOneUser(req.params.id)
    console.log(req.params.firstName)
    res.json(userName)
})

routerUsers.post('/', async (req, res) => {
    const newUser = await createUser(req.body)
    res.send('ok')
})

routerUsers.put('/:id', async (req, res) => {
    console.log(req.params.firstName);
    let updateOneUser = await updateUser(req.params.id,req.body)
    res.send(updateOneUser)
        });


routerUsers.delete('/:id', function (req, res) {
    let deletOne= deleteOneUser(req.params.id)
    res.send('done')
})
export default routerUsers;