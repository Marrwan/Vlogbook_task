const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({
        status: "success",
        data: {
            todos,
        },
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: "Something went wrong" });
    }
    }

exports.createTodo = async (req, res) => {
    try {
        const { todo } = req.body;
        if(!todo) return res.status(400).json({ status: "error", message: "Please enter all fields" });

        const token = req.cookies.token;
      if (!token) return res.status(401).json({   status: 'error', message: 'Unauthorized' });  // 401 Unauthorized
  //  Check is token is valid
      const decoded = await jwt.verify(token , process.env.JWT_SECRET);
  // Check if user still exists
      const user = await User.findById(decoded.id);

        const newTodo = await Todo.create({ todo, user });
        res.status(200).json({
        status: "success",
        data: {
            newTodo,
        },
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: "Something went wrong" });
    }
    }

exports.updateTodo = async (req, res) => {
    try {
        const { todo } = req.body;
        if(!todo) return res.status(400).json({ status: "error", message: "Please enter all fields" });

        const token = req.cookies.token;
      if (!token) return res.status(401).json({   status: 'error', message: 'Unauthorized' });  // 401 Unauthorized
  //  Check is token is valid
      const decoded = await jwt.verify(token , process.env.JWT_SECRET);
  // Check if user still exists
      const user = await User.findById(decoded.id);

        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { todo, user }, { new: true });
        res.status(200).json({
        status: "success",
        data: {
            updatedTodo,
        },
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: "Something went wrong" });
    }
    }

exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
        status: "success",
        data: {
            todo,
        },
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: "Something went wrong" });
    }
    }

// Language: javascript