
import express from 'express';
import { movieIndex,movieCreate, movieUpdate, movieDelete } from '../controller/movie.controller';

const router =express.Router()

//CRUD functionalities  
router.get('/',movieIndex)

router.post('/',movieCreate)


router.put('/:id',movieUpdate)

router.delete('/:id',movieDelete)



export default router;
