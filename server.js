const express  = require ('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());

console.log(port)


app.get('/',(req,res)=>{
    res.send("Running the port 3001")
})


//  const port  = process.env.PORT

app.listen(3001, () => {
    console.log(`Server is running on port ${port}`);
    // console.log(`Database URL: ${databaseUrl}`);
    // console.log(`Secret Key: ${secretKey}`);
});
