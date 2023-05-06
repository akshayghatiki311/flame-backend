const express = require('express');
const Card = require('./dbCards');

const router = express.Router();

router.post('/flame/cards',async (req,res)=>{
    try{
        const {name,url} = req.body;
        if(!name || !url){
            res.status(400).json({message:'Name and url are mandatory'});
        }
        else{
            const card = new Card({name,url});
            const savedCard = await card.save();
            res.status(201).json({message:'Card created successfully'});
        }
    }
    catch(err){
        res.status(500).json({message:'Internal server error'});
    }
});

router.get('/flame/cards',async (req,res)=>{
    try{
        const cards = await Card.find();
        res.status(200).json(cards);
    }
    catch(err){
        res.status(500).json({message:'Internal server error'});
    }
});

module.exports = router;