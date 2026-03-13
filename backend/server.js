import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
SuppressedError.use(express.json());

app.get("/", (req , res)=>{
    res.send("Commute API running ");
});

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server running pn port ${PORT}`);
});