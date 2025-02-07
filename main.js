import express from 'express';

import movieRoutes from "./routes/movie.route.js";

const app = express();

const port =8000;

app.get('/',(req, res)=>{


  res.json({msg : 'hello students'});
});


//middleWare  -- client   (middleware)  server

//middleWare, we can access using use keyword..

app.use('/movies',movieRoutes)




app.listen(port,()=>{


  console.log(` http://localhost:${port}`);
})