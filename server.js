import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors'
import routerUsers from './routes/UserRoutes.js';
const app = express()
const port = 5000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/UserRoutes',routerUsers)

// connection à la bdd mongodb
main().catch(err => console.error(err))
async function main() {
    await mongoose.connect('mongodb+srv://hannah:TBlIyaXZd1aS1wgh@cluster0.aailhd7.mongodb.net/Mern_Escapegame?retryWrites=true&w=majority');
    console.log("connection réussi");

}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})