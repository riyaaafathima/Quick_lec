const express=require('express')
const router=express.Router();
const {generateNotes, createNotes}=require('../controllers/notesController')


router.post('/generate',generateNotes)

router.post('/create-notes',createNotes)

module.exports=router;