import express from 'express';
import cors from 'cors';
import HashPassword from '../components/HashPassword.js';
import GetUuidV4 from '../components/GetUuidV4.js';

// Server Daten
const currentdate = new Date();
const app = express();

app.use(cors());
app.use(express.json());

// Variablen für die Server umgebung
    // const userId    = GetUuidV4()
    // const hashedPW  = await HashPassword('Test Password')



app.post('/testlink',(req, res)=>{
    const { destructure } = req.body
})


app.listen(3001, ()=>{
    var datetime = "Last Sync: "
                                + currentdate.getHours()    + ":"  
                                + currentdate.getMinutes()  + ":" 
                                + currentdate.getSeconds();
    console.log(datetime,'=> server is running on 3001')
})