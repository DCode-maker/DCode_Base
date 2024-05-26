import authRoutes from './routes/authRoutes.js'
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(cors())
app.use("/api/v1/auth",authRoutes);

console.log(port)


app.get('/',(req,res)=>{
    res.send("Running the port 3001")
})


//  const port  = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // console.log(`Database URL: ${databaseUrl}`);
    // console.log(`Secret Key: ${secretKey}`);
});
