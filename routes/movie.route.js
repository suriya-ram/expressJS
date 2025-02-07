
import express from 'express';

const router =express.Router()

//CRUD functionalities  
router.get('/',(req, res)=>{
  res.send(" get all movies")

})

router.post('/',()=>{
  
})


router.put('/:id',()=>{
  
})

router.delete('/:id',()=>{
  
})



export default router;
