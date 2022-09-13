const router = require('express').Router();
const protected = require('../middleware/protect');
const todo = require('../controllers/todo');

// View products
router.get('/',  todo.getTodos);


// Create Todo
router.post('/', protected, todo.createTodo);

// edit Todo
router.post('/:id/edit', protected, todo.updateTodo);

// Delete Todo
router.delete('/:id', protected, todo.deleteTodo);

module.exports = router;