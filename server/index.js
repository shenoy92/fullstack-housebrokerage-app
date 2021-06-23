import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import dotenv from 'dotenv'

const app= express();
dotenv.config();

app.use(express.json()); 
app.use(express.urlencoded({extented:true}));
app.use(cors());

app.use('/posts',postRoutes)
app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.send('Hello to House-Brokerage API')
})
const port= process.env.PORT || 3200;


mongoose.connect(process.env.url,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => app.listen(port, () => console.log(`Server Running `)))
    .catch((error) => console.log(`${error} did not connect`));

const con=mongoose.connection;

con.on('open',function(){
    console.log('Mongo DB connected')
})

