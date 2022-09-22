import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());




app.listen(3001, ()=>{
    var currentdate = new Date(); 
    var datetime = "Last Sync: "
                                + currentdate.getHours()        + ":"  
                                + currentdate.getMinutes()      + ":" 
                                + currentdate.getSeconds();
    console.log(datetime,'=> server is running on 3001')
})