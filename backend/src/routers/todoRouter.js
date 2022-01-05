const express = require('express');
const Todo = require('../models/todo');
const router = new express.Router();


router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/todos', async (req, res) => {
    const todo = new Todo(req.body);
    try {
     await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports=router;