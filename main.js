import express from 'express';

const app = express();

const port =8000;

app.get('/',(req, res)=>{


  res.json({msg : 'hello students'});
});

app.listen(port,()=>{


  console.log(` http://localhost:${port}`);
})